import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import './GalleryItem.css';
import Button from "@mui/material/Button";
import { blueGrey } from "@mui/material/colors";
import axios from "axios";

export default function GalleryItem({ picture, getPicturesCallback }) {

  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard(){
    setIsFlipped(!isFlipped)
  };

    const addLikes = (id) => {
    console.log(`Picture ID: ${id}`);

    // Make Axios call to update likes
    axios.put(`/api/gallery/like/${id}`)
      .then(() => {
        getPicturesCallback();
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  }

    return (
      <div data-testid="galleryItem">
        <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
          <div data-testid="toggle" className="card" onClick={flipCard}>
          <img src={picture.url} alt={picture.title} className="card-image"/>
          </div>
          <div className="card card-back" onClick={flipCard} >
            <h2>{picture.title}</h2>
            <h3 data-testid="description">{picture.description}</h3>
          </div>
        </ReactCardFlip>
        <div className="button-container">
        <Button variant="contained"
        color="primary"
        style={{ backgroundColor: blueGrey[500] }}
        onClick={() => addLikes(picture.id)} data-testid="like">
        Like</Button>
      </div>
      <div className="like-text">
        {picture.likes} like(s) for this picture!
      </div>
    </div>
  );
}