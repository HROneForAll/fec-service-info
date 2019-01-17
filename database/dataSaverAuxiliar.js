const { Pool } = require('pg');
const { user, host, database, password} = require('../queries/config.js');

const pool = new Pool({
  user,
  host,
  database,
  password
});

pool.on('error', (err) => {
  console.log('Error', err);
});

const amenities = {
  'Air conditioning': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/air-conditioning.png',
  'Bathroom essentials': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/essentials.png',
  'Bedroom comforts': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/extra-pillows-blankets.png',
  'Carbon monoxide detector': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/co2-detector.png',
  'Coffee maker': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/coffee-maker.png',
  'Dish washer': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/dishwasher.png',
  'Dryer': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/dryer.png',
  'Hair dryer': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/hair-dryer.png',
  'Heating': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/heating.png',
  'Indoor fireplace': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/indoor-fireplace.png',
  'Iron': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/iron.png',
  'Kitchen': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/kitchen.png',
  'Pets allowed': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/pets-allowed.png',
  'Pool': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/pool.png',
  'Self check-in': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/self-check-in.png',
  'Smoke detector': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/smoke-detector.png',
  'TV': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/tv.png',
  'Washer': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/washer.png',
  'Wifi': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/wireless-internet.png'
};

const saveData = async () => {
  for (let amenity in amenities) {
    await pool.query(`INSERT INTO Amenities (amenityname, url, isSpecial) VALUES ('${amenity}', '${amenities[amenity]}', ${!Math.round(Math.random())})`);
  }

  pool.end();
};

saveData();


