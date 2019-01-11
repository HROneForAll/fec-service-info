const faker = require('faker');
const fs = require('fs');

const amenities = ['airConditioning', 'bathroomEssentials', 'bedroomComforts', 'carbonMonoxideDetector', 'coffeeMaker', 'dishWasher', 'dryer', 'hairDryer', 'heating', 'indoorFireplace', 'iron', 'kitchen', 'petsAllowed', 'pool', 'roomname', 'selfCheckIn', 'smokeDetector', 'TV', 'washer', 'wifi']; 
// const specialAmenities = ['selfCheckIn', 'pool','kitchen','washer','dryer','dishwasher','indoorFireplace','petsAllowed','heating','airConditioning'];
// const essentialAmenities = ['wifi', 'TV', 'bathroomEssentials', 'bedroomComforts', 'coffeeMaker', 'hairDryer', 'iron', 'carbonMonoxideDetector', 'smokeDetector'];

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
  
  // for (let j = 0; j < specialAmenities.length; j++) {
  //   roomString = roomString + ',' + !!Math.floor(Math.random() * 2);
  // }

  // for (let k = 0; k < essentialAmenities.length; k++) {
  //   roomString = roomString + ',' + !!Math.floor(Math.random() * 2);
  // }

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
