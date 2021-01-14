import { useState } from "react";

import Searchbar from "./components/Searchbar/Searchbar.js";
import ImageInfo from "./components/ImageInfo/ImageInfo.js";
import "./App.css";

export default function App() {
  const [searchQuerry, setSearchQuerry] = useState("");

  const onSubmit = (data) => {
    setSearchQuerry(data);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      <ImageInfo searchQuerry={searchQuerry} />
    </div>
  );
}
