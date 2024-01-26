import GalleryList from "../GalleryList/GalleryList";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [picturesList, setPicturesList] = useState([])

  useEffect(() => {
    getPictures()
})

const getPictures = () => {
    axios.get('api/gallery')
      .then(response => {
        setPicturesList(response.data)
      })
      .catch(err => {
        //alert('error getting pictures');
        console.log('error getting pictures', err);
      })
  }

    return (
      <>
        <Header />
        <GalleryList picturesList={picturesList}/>
      </>
    );
}

export default App;
