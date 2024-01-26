import GalleryItem from "../GalleryItem/GalleryItem";
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';



export default function GalleryList({ picturesList }) {
   
    return (
        <div>

        <h2>Gallery List</h2>

        
     
        <Container maxWidth="md">
        <Grid container spacing={4}>
        {picturesList.map(picture => {
            return (
            <Grid item md={3} key={picture.id}>
                <GalleryItem picture={picture}/>
            </Grid>
            )})
            }
        </Grid>
        </Container>

        </div>

    );
}