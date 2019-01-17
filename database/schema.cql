USE ROOMSAMENITIES;
DROP TABLE IF EXISTS "Rooms";

CREATE TABLE "Rooms" (
  dummyID int,
  ID int,
  airConditioning boolean,
  bathroomEssentials boolean,
  bedroomComforts boolean,
  carbonMonoxideDetector boolean,
  coffeeMaker boolean,
  dishWasher boolean,
  dryer boolean,
  hairDryer boolean,
  heating boolean,
  indoorFireplace boolean,
  iron boolean,
  kitchen boolean,
  petsAllowed boolean,
  pool boolean,
  roomname text,
  selfCheckIn boolean,
  smokeDetector boolean,
  TV boolean,
  washer boolean,
  wifi boolean,
  PRIMARY KEY (dummyID, ID)
) WITH CLUSTERING ORDER BY (ID ASC);

CREATE INDEX rooms_index_id ON "Rooms" (ID);
CREATE INDEX rooms_index_roomname ON "Rooms" (roomname);
