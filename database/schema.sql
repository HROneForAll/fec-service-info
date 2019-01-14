DROP TABLE IF EXISTS Rooms;

CREATE TABLE Rooms (
  ID SERIAL NOT NULL PRIMARY KEY ,
  airConditioning BOOLEAN NOT NULL,
  bathroomEssentials BOOLEAN NOT NULL,
  bedroomComforts BOOLEAN NOT NULL,
  carbonMonoxideDetector BOOLEAN NOT NULL,
  coffeeMaker BOOLEAN NOT NULL,
  dishWasher BOOLEAN NOT NULL,
  dryer BOOLEAN NOT NULL,
  hairDryer BOOLEAN NOT NULL,
  heating BOOLEAN NOT NULL,
  indoorFireplace BOOLEAN NOT NULL,
  iron BOOLEAN NOT NULL,
  kitchen BOOLEAN NOT NULL,
  petsAllowed BOOLEAN NOT NULL,
  pool BOOLEAN NOT NULL,
  roomname VARCHAR(255),
  selfCheckIn BOOLEAN NOT NULL,
  smokeDetector BOOLEAN NOT NULL,
  TV BOOLEAN NOT NULL,
  washer BOOLEAN NOT NULL,
  wifi BOOLEAN NOT NULL
);

CREATE INDEX rooms_id_index ON Rooms (id);
CREATE INDEX rooms_roomname_index ON Rooms (roomname);
