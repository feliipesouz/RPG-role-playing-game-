//Usamos ts nos hooks pois eles não entregam nada gráfico, somente propriedades.
import React from "react";
export const useCharacter = () => {
  const [pos, setPos] = React.useState({ x: 3, y: 5 });

  const moveLeft = () => {
    setPos((pos) => ({
      x: pos.x - 1,
      y: pos.y,
    }));
  };

  const moveRight = () => {
    setPos((pos) => ({
      x: pos.x + 1,
      y: pos.y,
    }));
  };

  const moveUp = () => {
    setPos((pos) => ({
      x: pos.x,
      y: pos.y - 1,
    }));
  };

  const moveDown = () => {
    setPos((pos) => ({
      x: pos.x,
      y: pos.y + 1,
    }));
  };

  //Aqui retornamos um obj com as propriedades que queremos dar acesso a quem tiver manipulando o nosso boneco
  return {
    x: pos.x,
    y: pos.y,
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
  };
};
