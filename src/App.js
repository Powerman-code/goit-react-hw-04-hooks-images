import { useState } from "react";

import Searchbar from "./components/Searchbar/Searchbar.js";
import ImageInfo from "./components/ImageInfo/ImageInfo.js";
import "./App.css";

export default function App() {
  const [searchQuerry, setSearchQuerry] = useState("");
  // const [images, setImages] = useState([]);
  // const [error, setError] = useState(null);
  // state = {
  //   searchQuerry: '',
  //   images: [],
  //   error: null,
  // };

  const onSubmit = (data) => {
    setSearchQuerry(data);
    console.log(data);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      <ImageInfo searchQuerry={searchQuerry} />
    </div>
  );
}
