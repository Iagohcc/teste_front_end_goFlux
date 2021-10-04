// import CardAlbum from "../../components/CardAlbum";
import React, { useEffect, useState } from "react";
import api from "./services/api";

export default function Albums(){
  const [albums, setAlbums] = useState();

  useEffect(() => {
    api
      .get("/")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div>
      <div className="home_content">
          <div className="text">Albums</div> 
          {/* <CardAlbum /> */}
          <p>Music: {albums?.}</p>
          <p>Artist: {albums?.}</p>
      </div>  
    </div>
  );
}