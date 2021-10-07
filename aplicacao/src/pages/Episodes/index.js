import React, { useEffect, useState } from "react";
import CardFlux from "../../components/CardFlux";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";

export default function Episodes() {
  const [episodios, setEpisodios] = useState({ info: {}, results: [] });
  const [pagina, setPagina] = useState(1);
  const [maxPages, setMaxPages] = useState();
  const [pesquisa, setPesquisa] = useState();

   // Função para consumir api

  useEffect(() => {
    async function pegarEpisodios() {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      if (pesquisa) {
        await fetch(
          `https://rickandmortyapi.com/api/episode?name=${pesquisa}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            if (result.error) {
              setMaxPages(1)
              setEpisodios({ results: [] })
            } else {
              setEpisodios(result);
              setMaxPages(result.info.pages);
            }

          });
      } else {
        await fetch(
          `https://rickandmortyapi.com/api/episode?page=${pagina}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            if (result.error) {
              setMaxPages(1)
              setEpisodios({ results: [] })
            } else {
              setEpisodios(result);
              setMaxPages(result.info.pages);
            }
          });
      }
    }
    pegarEpisodios();
  }, [pagina, pesquisa]);

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

  const handleSearchChange = event => {
    setPesquisa(event.target.value)
  }

  return (
    <>
    <div className="page">
      <div className="page__title-page">Episodes</div>
      <div className="page__search-header">
        <i class="bx bx-search-alt-2"></i>
        <input
          type="text"
          type="text"
          placeholder="Search"
          value={pesquisa}
          onChange={handleSearchChange}
        />
      </div>
      </div>
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
