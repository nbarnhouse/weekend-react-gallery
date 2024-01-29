CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'The Goat', 'Chris'' photo of a goat taken at Glacier National Park.'),
('images/banksy_balloon_girl.jpg', 'Girl with Balloon', 'Banky''s ''Girl with Balloon'' original graffiti mural painted next to a shop on the South Bank in London.'),
('images/0605_repro.jpg', 'The Goldfinch', 	'Carel Fabritius'' The Goldfinch is on display at the Mauritshuis The Hague.'),
('images/400px-Blue_Mountain_Ski_Area_Feb_2014.JPG', 'Blue Mountain', 'Blue Mountain Resort | Palmerton PA'),
('images/fox-715588__340.jpg', 'The Fox', 'Photo of a fox taken from Myron''s code repo.'),
('images/Campbells-1000x1515.jpg', 'Campbell''s Soup I, Vegetable Made With Beef Stock', 'One of the world''s most famous contemporary artworks is artist Andy Warhol''s Campbell''s Soup Cans. Symbolic of the Pop Art movement, the piece illustrates consumerist culture and mass media in American society.');