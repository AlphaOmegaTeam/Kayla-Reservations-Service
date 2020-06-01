CREATE TABLE open_table(
  listingId integer NOT NULL,
  name char(80),
  booked integer,
  "6:00PM" integer,
  "6:15PM" integer,
  "6:30PM" integer,
  "6:45PM" integer,
  "7:00PM" integer,
  "7:15PM" integer,
  "7:30PM" integer,
  "7:45PM" integer,
  "8:00PM" integer,
  "8:15PM" integer,
  "8:30PM" integer,
  PRIMARY KEY(listingId)
);

-- CREATE INDEX listingIndex ON open_table(listingId);
-- COPY open_table FROM 'testp.csv' DELIMITER ',' CSV HEADER;