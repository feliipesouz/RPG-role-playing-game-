//Usamos ts nos hooks pois eles não entregam nada gráfico, somente propriedades.
import React from "react";
import { mapSpots } from "../data/mapSpots";
import { CharacterSides } from "../types/CharacterSides";
export const useCharacter = () => {
  const [pos, setPos] = React.useState({ x: 3, y: 5 });
  const [side, setSide] = React.useState<CharacterSides>("down");

  const moveLeft = () => {
    setPos((pos) => ({
      //Dentro do setPos para pegar o 'pos' atualizado.
      x: canMove(pos.x - 1, pos.y) ? pos.x - 1 : pos.x,
      y: pos.y,
    }));
    setSide("left");
  };

  const moveRight = () => {
    setPos((pos) => ({
      x: canMove(pos.x + 1, pos.y) ? pos.x + 1 : pos.x,
      y: pos.y,
    }));
    setSide("rigth");
  };

  const moveDown = () => {
    setPos((pos) => ({
      x: pos.x,
      y: canMove(pos.x, pos.y + 1) ? pos.y + 1 : pos.y,
    }));
    setSide("down");
  };

  const moveUp = () => {
    setPos((pos) => ({
      x: pos.x,
      y: canMove(pos.x, pos.y - 1) ? pos.y - 1 : pos.y,
    }));
    setSide("up");
  };

  const canMove = (x: number, y: number) => {
    console.log(x, y);
    if (mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
      if (mapSpots[y][x] === 1) {
        return true;
      }
    }
    return false;
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
