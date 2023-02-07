//Usamos ts nos hooks pois eles não entregam nada gráfico, somente propriedades.
import React from "react";
import { CharacterSides } from "../types/CharacterSides";
export const useCharacter = () => {
  const [pos, setPos] = React.useState({ x: 3, y: 5 });
  const [side, setSide] = React.useState<CharacterSides>("down");

  const moveLeft = () => {
    setPos((pos) => ({
      x: pos.x - 1,
      y: pos.y,
    }));
    setSide("left");
  };

  const moveRight = () => {
    setPos((pos) => ({
      x: pos.x + 1,
      y: pos.y,
    }));
    setSide("rigth");
  };

  const moveUp = () => {
    setPos((pos) => ({
      x: pos.x,
      y: pos.y - 1,
    }));
    setSide("up");
  };

  const moveDown = () => {
    setPos((pos) => ({
      x: pos.x,
      y: pos.y + 1,
    }));
    setSide("down");
  };

  //Aqui retornamos um obj com as propriedades que queremos dar acesso a quem tiver manipulando o nosso boneco
  return {
    x: pos.x,
    y: pos.y,
    side,
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
  };
};
