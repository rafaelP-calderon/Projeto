// import { useState } from "react";
// import RestauranteCard from "../RestauranteCard/RestauranteCard";

 import restaurante1 from "/src/assets/restaurante1.jpg";
 import restaurante2 from "/src/assets/restaurante2.jpg";
 import restaurante3 from "/src/assets/restaurante3.jpg";

// function ListaRestaurantes() {
//   const [index, setIndex] = useState(1);

//   function avancar() {
//     setIndex(
//       index >= restaurantes.length - 1
//         ? index - (restaurantes.length-1)
//         : index + 1,
//     );
//   }

//   function voltar() {
//     setIndex(index === 0 ? restaurantes.length-1 : index - 1);
//   }

//   return (
//     <RestauranteCard
//       key={restaurantes[index].id}
//       imagem={restaurantes[index].imagem}
//       nome={restaurantes[index].nome}
//       local={restaurantes[index].local}
//       nota={restaurantes[index].nota}
//       descricao={restaurantes[index].descricao}
//       avancar={avancar}
//       voltar={voltar}
//     />
//   );
// }

// export default ListaRestaurantes;

import { useEffect, useState } from "react";
import RestauranteCard from "../RestauranteCard/RestauranteCard";

function ListaRestaurantes() {
  const [restaurantes, setRestaurantes] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/restaurantes")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setRestaurantes(dados);
      })
      .catch((erro) => {
        console.error("Erro ao buscar restaurantes:", erro);
      });
  }, []);

  function avancar() {
    setIndex(
      index >= restaurantes.length - 1
        ? 0
        : index + 1
    );
  }

  function voltar() {
    setIndex(
      index === 0
        ? restaurantes.length - 1
        : index - 1
    );
  }

  // Enquanto os restaurantes ainda estão carregando
  if (restaurantes.length === 0) {
    return <p>Carregando restaurantes...</p>;
  }

  return (
    <RestauranteCard
      key={restaurantes[index].id}
      imagem={restaurantes[index].imagem}
      nome={restaurantes[index].nome}
      local={restaurantes[index].local}
      nota={restaurantes[index].nota}
      descricao={restaurantes[index].descricao}
      avancar={avancar}
      voltar={voltar}
    />
  );
}

export default ListaRestaurantes;
