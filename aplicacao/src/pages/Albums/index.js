import React from "react";
// import React, { useEffect, useState } from "react";
// import api from "./services/api";
import Card from "../../components/Card";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";

export default function Albums() {
    // const [albums, setAlbums] = useState();
  
    // useEffect(() => {
    //   api
    //     .get("")
    //     .then((response) => setAlbums(response.data))
    //     .catch((err) => {
    //       console.error("ops! ocorreu um erro" + err);
    //     });
    // }, []);

  const data = [
    {
      imgSrc: "https://via.placeholder.com/150",
      artist: "Iago",
      music: "teste teste",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      artist: "Iago",
      music: "teste teste",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      artist: "Iago",
      music: "teste teste",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      artist: "Iago",
      music: "teste teste",
    },
  ];

  return (
    <>
      <h1 className="title-page">Albums</h1>
      <Row>
        {data.map((item) => (
          <Col>
            <Card
              imgSrc={item.imgSrc}
              artist={item.artist}
              music={item.music}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
