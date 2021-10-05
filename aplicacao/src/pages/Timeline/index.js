// import { useEffect, useState } from "react";
import CardTimeline from "../../components/CardTimeline";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";

export default function Timeline() {
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
  ];
  // const [timeline, setTimeline] = useState();
  // useEffect(() => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Accept", "text/xml");

  //   var requestOptions = {
  //     method: 'GET',
  //     headers: myHeaders,
  //     redirect: 'follow',
  //     mode: 'no-cors'
  //   };

  //   fetch("http://api.music-story.com/en/news/search?source=Music%20Story", requestOptions)
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .catch(error => console.log('error', error));
  // })
  return (
    <div>
      <div className="text">Timeline</div>
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
