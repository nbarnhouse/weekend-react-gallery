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
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken by Chris at Glacier National Park.'),
('fox-715588__340.jpg', 'Fox!', 'Photo of a fox taken from Myron''s code repo.');
('banksy_balloon_girl.jpg', 'Girl with Balloon', 'Banky''s ''Girl with Balloon''.');