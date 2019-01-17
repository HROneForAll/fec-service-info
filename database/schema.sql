DROP TABLE IF EXISTS Rooms;

CREATE TABLE Rooms (
  id SERIAL PRIMARY KEY ,
  "Air conditioning" BOOLEAN NOT NULL,
  "Bathroom essentials" BOOLEAN NOT NULL,
  "Bedroom comforts" BOOLEAN NOT NULL,
  "Carbon monoxide detector" BOOLEAN NOT NULL,
  "Coffee maker" BOOLEAN NOT NULL,
  "Dish washer" BOOLEAN NOT NULL,
  "Dryer" BOOLEAN NOT NULL,
  "Hair dryer" BOOLEAN NOT NULL,
  "Heating" BOOLEAN NOT NULL,
  "Indoor fireplace" BOOLEAN NOT NULL,
  "Iron" BOOLEAN NOT NULL,
  "Kitchen" BOOLEAN NOT NULL,
  "Pets allowed" BOOLEAN NOT NULL,
  "Pool" BOOLEAN NOT NULL,
  roomname VARCHAR(255),
  "Self check-in" BOOLEAN NOT NULL,
  "Smoke detector" BOOLEAN NOT NULL,
  "TV" BOOLEAN NOT NULL,
  "Washer" BOOLEAN NOT NULL,
  "Wifi" BOOLEAN NOT NULL
);

CREATE INDEX rooms_roomname_index ON Rooms (roomname);
