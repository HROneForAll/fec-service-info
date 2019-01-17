const faker = require('faker');
const fs = require('fs');

const amenities = ['Air conditioning', 'Bathroom essentials', 'Bedroom comforts','Carbon monoxide detector','Coffee maker','Dish washer','Dryer','Hair dryer','Heating','Indoor fireplace','Iron','Kitchen','Pets allowed','Pool','roomname','Self check-in','Smoke detector','TV','Washer', 'Wifi'];

const columns = 'id,' + amenities.join() + '\n';
const before = Date.now();

const writeFile = (stream, rowsRecorded, j) => {
  if (rowsRecorded >= 1000000) {
    stream.end();
    if (j === 10) {
      console.log('time taken: ', (Date.now() - before) / 60000);
    }
    return;
  }

  const id = (j - 1) * 1000000 + rowsRecorded + 1;
  let roomString = `${id}`;

  for (let k = 0; k < amenities.length; k++) {
    if (amenities[k] === 'roomname') {
      roomString = roomString + ',' + `${faker.lorem.word()}${id}`;
    } else {
      roomString = roomString + ',' + !!Math.floor(Math.random() * 2);
    }
  }

  const shouldContinue = stream.write(roomString + '\n');
  if (shouldContinue) {
    writeFile(stream, rowsRecorded + 1, j);
  } else {
    stream.once('drain', () => {
      writeFile(stream, rowsRecorded + 1, j);
    });
  }
};

for (let j = 1; j <= 10; j++) {
  const roomsFile = fs.createWriteStream(`./data/rooms${j}.csv`);
  roomsFile.write(columns);
  writeFile(roomsFile, 0, j);
}
