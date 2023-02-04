import { Character } from "./components/Character";
import { Container, Map } from "./styles";

const App = () => {
  return (
    <Container>
      <Map>
        <Character x={5} y={0} />
      </Map>
    </Container>
  );
};

export default App;
