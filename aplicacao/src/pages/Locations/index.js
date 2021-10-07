import React, { useEffect, useState } from "react";
import CardFlux from "../../components/CardFlux";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";

export default function Locations() {
  const [locais, setLocais] = useState({ info: {}, results: [] });
  const [pagina, setPagina] = useState(1);
  const [maxPages, setMaxPages] = useState();
 
   // Função para consumir api

  useEffect(() => {
    async function pegarLocais() {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      await fetch(
        `https://rickandmortyapi.com/api/location?page=${pagina}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setLocais(result);
          setMaxPages(result.info.pages);
        });
    }
    pegarLocais();
  }, [pagina]);

  // Funções: paginação 

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
      <h1 className="title-page">Locations</h1>
      <Row>
        {locais.results.map((item) => (
          <Col>
            <CardFlux
              title={item.name}
              date={"Type: " + item.type}
              text={"Dimension: " + item.dimension}
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
