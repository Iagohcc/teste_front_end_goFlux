import React from "react";
// import React, { useEffect, useState } from "react";
// import api from "./services/api";
import Card from "../../components/Card";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";

export default function Artist() {
  // const [artist, setArtist] = useState();

  // useEffect(() => {
  //   api
  //     .get("")
  //     .then((response) => setArtist(response.data))
  //     .catch((err) => {
  //       console.error("ops! ocorreu um erro" + err);
  //     });
  // }, []);
  const data = [
    {
      imgSrc: "https://via.placeholder.com/150",
      artist: "Nick Manaj",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      artist: "Nick Manaj",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      artist: "Nick Manaj",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      artist: "Nick Manaj",
    },
  ];
  return (
    <>
      <h1 className="title-page">Artist</h1>
      <Row>
        {data.map((item) => (
          <Col>
            <Card
              imgSrc={item.imgSrc}
              artist={item.artist}
              isArtist
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
