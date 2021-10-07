import React, { useEffect, useState } from "react";
import CardFlux from "../../components/CardFlux";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";

export default function Episodes() {
  const [episodios, setEpisodios] = useState({ info: {}, results: [] });
  const [pagina, setPagina] = useState(1);
  const [maxPages, setMaxPages] = useState();

  useEffect(() => {
    async function pegarEpisodios() {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      await fetch(
        `https://rickandmortyapi.com/api/episode?page=${pagina}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setEpisodios(result);
          setMaxPages(result.info.pages);
        });
    }
    pegarEpisodios();
  }, [pagina]);

  function handleProximo() {
    if (pagina < maxPages) {
      setPagina(pagina + 1);
    }
  }
  function handleAnterior() {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  }
  return (
    <>
      <div className="title-page">Episodes</div>
      <Row>
        {episodios.results.map((item) => (
          <Col>
            <CardFlux
              title={item.name}
              date={item.air_date}
              text={item.episode}
            />
          </Col>
        ))}
      </Row>
      <div className="btn-page">
        <button onClick={handleAnterior}>Previous page</button>
        <button onClick={handleProximo}>Next page</button>
      </div>
    </>
  );
}
