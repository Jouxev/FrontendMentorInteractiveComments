import styled from "styled-components";
import { Main } from "./Components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <Main />
    </Container>
  );
}

export default App;
