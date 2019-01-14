const fs = require('fs');


var sampleData = [];
for (var i = 1; i < 11; i++) {
  sampleData.push({
    id: i,
    amenities: {
      special: {
        'Self check-in': !(Math.floor(Math.random() * 2)),
        'Pool': !(Math.floor(Math.random() * 2)),
        'Kitchen': !(Math.floor(Math.random() * 2)),
        'Washer': !(Math.floor(Math.random() * 2)),
        'Dryer': !(Math.floor(Math.random() * 2)),
        'Dishwasher': !(Math.floor(Math.random() * 2)),
        'Indoor fireplace': !(Math.floor(Math.random() * 2)),
        'Pets allowed': !(Math.floor(Math.random() * 2)),
        'Heating': !(Math.floor(Math.random() * 2)),
        'Air conditioning': !(Math.floor(Math.random() * 2)),
      },
      essential: {
        'Wifi': !(Math.floor(Math.random() * 2)),
        'TV': !(Math.floor(Math.random() * 2)),
        'Bathroom essentials': !(Math.floor(Math.random() * 2)),
        'Bedroom comforts': !(Math.floor(Math.random() * 2)),
        'Coffee maker': !(Math.floor(Math.random() * 2)),
        'Hair dryer': !(Math.floor(Math.random() * 2)),
        'Iron': !(Math.floor(Math.random() * 2)),
        'Carbon monoxide detector': !(Math.floor(Math.random() * 2)),
        'Smoke detector': !(Math.floor(Math.random() * 2))
      }
    }
  });
}

fs.writeFile('data.txt', JSON.stringify(sampleData), 'utf8', (err) => {
  if (err) {
    throw err;
  }
  console.log('data.txt has been generated');
});

//this file randomly generates the 100 amenities entries.