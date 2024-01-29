import { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import './GalleryList.css';

const GalleryList = ({ picturesList, getPicturesCallback}) => {

  return (
    <div>
      <h2>Click each Image to find out more information!</h2>
      <Container maxWidth="lg">

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

export default GalleryList;
