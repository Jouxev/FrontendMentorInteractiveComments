import styled from "styled-components";
import { Main } from "./Components";
import { DialogBox } from "./Components/DialogBox";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

function App() {
  return (
    <>
      <Container>
        <Main />
      </Container>
    </>
  );
}

export default App;
