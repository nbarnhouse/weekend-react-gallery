import GalleryList from "../GalleryList/GalleryList";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [picturesList, setPicturesList] = useState([])
  
  useEffect(() => {
    console.log('Hello');
    getPictures()
  }, []);

  const getPictures = () => {
    axios.get('/api/gallery')
      .then(response => {
        console.log('SERVER DATA:', response);
        setPicturesList(response.data)
      })
      .catch(err => {
        //alert('error getting pictures');
        console.log('error getting pictures', err);
      })
  }

  return (
    <div data-testid="app">
      <Header />
      <GalleryList picturesList={picturesList}
      getPicturesCallback={getPictures} />
    </div>
  )
};
