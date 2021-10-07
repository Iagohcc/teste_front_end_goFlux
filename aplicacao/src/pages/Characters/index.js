import React, { useEffect, useState } from "react";
// import api from "./services/api";
import Card from "../../components/Card";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";

export default function Artist() {
  const [personagens, setPersonagens] = useState({ info: {}, results: [] });
  const [pagina, setPagina] = useState(1);
  const [maxPages, setMaxPages] = useState();
  const [pesquisa, setPesquisa] = useState();

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

  useEffect(() => {
    async function pegarPersonagens() {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      if (pesquisa) {
        await fetch(
          `https://rickandmortyapi.com/api/character?name=${pesquisa}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            if (result.error) {
              setMaxPages(1)
              setPersonagens({ results: [] })
            } else {
              setPersonagens(result);
              setMaxPages(result.info.pages);
            }
          });
      } else {
        await fetch(
          `https://rickandmortyapi.com/api/character?page=${pagina}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            if (result.error) {
              setMaxPages(1)
              setPersonagens({ results: [] })
            } else {
              setPersonagens(result);
              setMaxPages(result.info.pages);
            }
          });
      }

    }
    pegarPersonagens();
  }, [pagina, pesquisa]);

  const handleSearchChange = event => {
    setPesquisa(event.target.value)
  }
  return (
    <>
      <h1 className="title-page">Characters</h1>
      <div className="header-content__header-painel__search-header">
        <i class="bx bx-search-alt-2"></i>
        <input
          type="text"
          input
          type="text"
          placeholder="Search"
          value={pesquisa}
          onChange={handleSearchChange}
        />
      </div>
      <Row>
        {personagens.results.map((item) => (
          <Col>
            <Card imgSrc={item.image} artist={item.name} isArtist />
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
