DROP TABLE IF EXISTS categories, restaurants;

CREATE TABLE categories (
  id serial PRIMARY KEY,
  name text
);

CREATE TABLE restaurants (
  id serial PRIMARY KEY,
  name text NOT NULL,
  category_id integer NOT NULL REFERENCES categories ,
  delivery_time integer,
  favorited integer,
  image_url text,
  location geography
);
