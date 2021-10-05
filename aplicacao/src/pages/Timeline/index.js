import React from "react";
// import React, { useEffect, useState } from "react";
// import api from "./services/api";
import CardTimeline from "../../components/CardTimeline";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";

export default function Timeline() {
    // const [timeline, setTimeline] = useState();
  
    // useEffect(() => {
    //   api
    //     .get("")
    //     .then((response) => setTimeline(response.data))
    //     .catch((err) => {
    //       console.error("ops! ocorreu um erro" + err);
    //     });
    // }, []);
  const data = [
    {
      title: "Noticias",
      date: "1 setember",
      text: "dadadfe efr efaf eefaefefe",
      artist: "Iago",
    },
    {
      title: "Noticias 2",
      date: "1 setember",
      text: "dadadfe efr efaf eefaefefe",
      artist: "Iago",
    },
    {
      title: "Noticias 3",
      date: "1 setember",
      text: "dadadfe efr efaf eefaefefe",
      artist: "Iago",
    },
    {
      title: "Noticias 4",
      date: "1 setember",
      text: "dadadfe efr efaf eefaefefe",
      artist: "Iago",
    },
  ];

  return (
    <div>
      <div className="title-page">Timeline</div>
      <Row>
        {data.map((item) => (
          <Col>
            <CardTimeline
              title={item.title}
              date={item.date}
              text={item.text}
              artist={item.artist}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
