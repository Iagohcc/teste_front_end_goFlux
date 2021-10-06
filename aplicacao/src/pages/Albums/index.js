import React, { useEffect, useState } from "react";
// import React, { useEffect, useState } from "react";
// import api from "./services/api";
import Card from "../../components/Card";
import CardTimeline from "../../components/CardTimeline";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";

export default function Albums() {

  const [locais, setLocais] = useState({ info: {}, results: [] })
  const [pagina, setPagina] = useState(1)
  const [maxPages, setMaxPages] = useState()
  const [pesquisa, setPesquisa] = useState()

  useEffect(() => {
    async function pegarLocais() {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      await fetch(`https://rickandmortyapi.com/api/location?page=${pagina}`, requestOptions)
        .then(response => response.json())
        .then((result) => {
          setLocais(result)
          setMaxPages(result.info.pages)
        })
    }
    pegarLocais()
  }, [pagina]);

  function handleProximo() {
    if (pagina < maxPages) {
      setPagina(pagina + 1)
    }
  }
  function handleAnterior() {
    if (pagina > 1) {
      setPagina(pagina - 1)
    }
  }

  return (
    <>
      <h1 className="title-page">Locations</h1>
      <Row>
        {locais.results.map((item) => (
          <Col>
            <CardTimeline
              title={item.name}
              date={'Type: ' + item.type}
              text={'Dimension: ' + item.dimension}
            />
          </Col>
        ))}
      </Row>
      <button onClick={handleAnterior}>Previous page</button>
      <button onClick={handleProximo}>Next page</button>
    </>
  );

}
