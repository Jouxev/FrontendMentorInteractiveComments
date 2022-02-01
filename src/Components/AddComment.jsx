import styled from "styled-components";

const Container = styled.div`
  background-color: var(--White);
  height: auto;
  width: 100%;
  border-radius: 5px;
  display: flex;
  padding: 10px;
  margin-bottom: 20px;
`;
const Right = styled.div``;
const Center = styled.div``;
const Left = styled.div``;
export const AddComment = () => {
  return (
    <Container>
      <Right></Right>
      <Center></Center>
      <Left></Left>
    </Container>
  );
};
