import { Container } from "./styles";

type Props = {
  x: number;
  y: number;
};

export const Character = ({ x, y }: Props) => {
  const size = 30; //Tamanho do meu boneco
  return <Container left={x * size} top={y * size} size={size}></Container>;
};
