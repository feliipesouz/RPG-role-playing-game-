import { CharacterSides } from "../../types/CharacterSides";
import { Container } from "./styles";

type Props = {
  x: number;
  y: number;
  side: CharacterSides
};

export const Character = ({ x, y, side }: Props) => {
  const size = 30; //Tamanho do meu boneco
  const sides = {
    'down': 0,
    'left': -30,
    'rigth': -60,
    'up': -90
  }

  return <Container left={x * size} top={y * size} size={size} side={sides[side] ?? 0}></Container>;
};
