import { useState } from "react";
import RestauranteCard from "../RestauranteCard/RestauranteCard";

import restaurante1 from "/src/assets/restaurante1.jpg";
import restaurante2 from "/src/assets/restaurante2.jpg";
import restaurante3 from "/src/assets/restaurante3.jpg";

function ListaRestaurantes() {
  const [index, setIndex] = useState(1);

  function avancar() {
    setIndex(
      index >= restaurantes.length - 1
        ? index - (restaurantes.length-1)
        : index + 1,
    );
  }

  function voltar() {
    setIndex(index === 0 ? restaurantes.length-1 : index - 1);
  }

  const restaurantes = [
    {
      id: 1,
      imagem: restaurante1,
      nome: "Restaurante BomBom",
      local: "Guarulhos, SP",
      nota: 4.9,
      descricao:
        "Este restaurante é excelente, entrega qualidade! Este restaurante é excelente, entrega qualidade!Este restaurante é excelente, entrega qualidade!Este restaurante é excelente, entrega qualidade!Este restaurante é excelente, entrega qualidade!Este restaurante é excelente, entrega qualidade!Este restaurante é excelente, entrega qualidade!Este restaurante é excelente, entrega qualidade!Este restaurante é excelente, entrega qualidade!Este restaurante é excelente, entrega qualidade!Este restaurante é excelente, entrega qualidade!Este restaurante é excelente, entrega qualidade!",
    },
    {
      id: 2,
      imagem: restaurante2,
      nome: "Restaurante RuimRuim",
      local: "São Paulo, SP",
      nota: 2.6,
      descricao:
        "Este restaurante é ruim, entrega nada! Este restaurante é ruim, entrega nada!Este restaurante é ruim, entrega nada!Este restaurante é ruim, entrega nada!Este restaurante é ruim, entrega nada!Este restaurante é ruim, entrega nada!Este restaurante é ruim, entrega nada!Este restaurante é ruim, entrega nada!Este restaurante é ruim, entrega nada!Este restaurante é ruim, entrega nada!Este restaurante é ruim, entrega nada!Este restaurante é ruim, entrega nada!",
    },
    {
      id: 3,
      imagem: restaurante3,
      nome: "Restaurante MédioMédio",
      local: "Rio de Janeiro, RJ",
      nota: 3.9,
      descricao:
        "Este restaurante é mediano, entrega dentro do esperado! Este restaurante é mediano, entrega dentro do esperado!Este restaurante é mediano, entrega dentro do esperado!Este restaurante é mediano, entrega dentro do esperado!Este restaurante é mediano, entrega dentro do esperado!Este restaurante é mediano, entrega dentro do esperado!Este restaurante é mediano, entrega dentro do esperado!Este restaurante é mediano, entrega dentro do esperado!Este restaurante é mediano, entrega dentro do esperado!Este restaurante é mediano, entrega dentro do esperado!Este restaurante é mediano, entrega dentro do esperado!Este restaurante é mediano, entrega dentro do esperado!",
    },
  ];

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
