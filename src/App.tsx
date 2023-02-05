import React from "react";
import { Character } from "./components/Character";
import { useCharacter } from "./hooks/useCharacter";
import { Container, Map } from "./styles";

const App = () => {
  const useChar = useCharacter();

  React.useEffect(() => {
    window.addEventListener("keydown", getKey);
  }, []);

  const getKey = (e: KeyboardEvent) => {
    console.log(e.code);
    switch (e.code) {
      case "KeyA":
      case "ArrowLeft":
        useChar.moveLeft();
        break;
      case "KeyW":
      case "ArrowUp":
        useChar.moveUp();
        break;
      case "KeyD":
      case "ArrowRight":
        useChar.moveRight();
        break;
      case "KeyS":
      case "ArrowDown":
        useChar.moveDown();
        break;
    }
  };

  return (
    <Container>
      <Map>
        <Character x={useChar.x} y={useChar.y} />
      </Map>
    </Container>
  );
};

export default App;
