DROP TABLE Amenities;

CREATE TABLE Amenities (
  id SERIAL PRIMARY KEY ,
  amenityname TEXT NOT NULL,
  url TEXT NOT NULL,
  isSpecial BOOLEAN NOT NULL
);

CREATE INDEX amenities_amenityname_index ON Amenities (amenityname);
