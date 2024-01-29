import GalleryItem from "../GalleryItem/GalleryItem";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import './GalleryList.css';

export default function GalleryList({ picturesList, getPicturesCallback}) {

  return (
    <div>
      <Container maxWidth="lg">
      <h3>Click each Image to find out more information!</h3>
      {/* Loop through data to pull relevant picture data */}
        <Grid container spacing={6} data-testid="galleryList">
          {picturesList.map((picture) => (
            <Grid item key={picture.id} className="card-container" data-testid="galleryList">
                <GalleryItem picture={picture} 
                getPicturesCallback = {getPicturesCallback} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
};

