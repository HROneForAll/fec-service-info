const { Pool } = require('pg');
const { user, host, database, password} = require('./config.js');

const startConnectionToDB = () => {
  const pool = new Pool({
    user,
    host,
    database,
    password
  });
  
  pool.on('error', (err) => {
    console.log('Error', err);
  });

  const result = {};
  result.pool = pool;
  result.endConnection = () => {
    pool.end();
  };

  return result;
};

const getAmenities = async (roomId, res, data) => {
  const { pool, endConnection } = startConnectionToDB();
  const { rows } = await pool.query(`SELECT * FROM rooms WHERE id = ${roomId}`);
  delete rows[0].id;
  delete rows[0].roomname;
  endConnection();
  if (rows.length === 0) {
    res.status(404);
    res.send('The room searched doesn\'t exist!');
  } else {
    res.status(200);
    data.amenities = rows[0];
    res.json(data);
  }
};

const getPicturesAmenities = async (data) => {
  const { pool, endConnection } = startConnectionToDB();
  const { rows } = (await pool.query(`SELECT * FROM amenities`));
  const urls = {};
  data.isSpecial = {};
  for (let index in rows) {
    const item = rows[index];
    urls[item.amenityname] = item.url;
    data.isSpecial[item.amenityname] = item.isspecial;
  }
  endConnection();
  data.URLs = urls;
  console.log('data', data);
};

const postAmenities = async (amenities, res) => {
  const { pool, endConnection } = startConnectionToDB();
  const columns = Object.keys(amenities).join(', ');
  const values = Object.values(amenities).join(', ');
  // uncomment the following lines if the DB is already seeded
  // const { rows } = await pool.query(`SELECT MAX(id) FROM rooms`);
  // const nextId = Number(rows[0].max) + 1;

  await pool.query(`INSERT INTO rooms (${columns}) VALUES (${values})`)
    .then(() => {
      res.status(201);
      res.send('Room row created succesfully!');
    })
    .catch((err) => {
      console.log('ERROR', err);
      res.status(400);
      res.send('You are trying to insert a property which is not available!');
    });

  endConnection();
};

const updateAmenities = async (roomId, amenities, res) => {
  const { pool, endConnection } = startConnectionToDB();
  const keyValuePairs = [];
  for (let amenity in amenities) {
    keyValuePairs.push(`${amenity} = ${amenities[amenity]}`);
  }
  await pool.query(`UPDATE rooms SET ${keyValuePairs.join(', ')} WHERE id = ${roomId}`)
    .then(({ rowCount }) => {
      if (!rowCount) {
        res.status(404);
        res.send('The room you tried to update doesn\'t exist.');
      } else {
        res.status(200);
        res.send('Room updated succesfully!');
      }
    })
    .catch((err) => {
      console.log('ERROR', err);
      res.send('The property you are trying to update doesn\'t exist.');
    });
  
  endConnection();
};

const deleteRoom = async (roomId, res) => {
  const { pool, endConnection } = startConnectionToDB();
  const result = await pool.query(`DELETE FROM rooms WHERE id = ${roomId}`);
  if (!result.rowCount) {
    res.status(404);
    res.send('The room you tried to delete doesn\'t exist!');
  } else {
    res.status(200);
    res.send('Room deleted succesfully!');
  }
  endConnection();
};

module.exports = {
  getAmenities,
  getPicturesAmenities,
  postAmenities,
  updateAmenities,
  deleteRoom
};
