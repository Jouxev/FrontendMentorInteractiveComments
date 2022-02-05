import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 320px;
  border-radius: 10px;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 20px;
  color: var(--DarkBlue);
`;
const Content = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: var(--GrayishBlue);
`;
const ActionButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;
const Button = styled.button`
  border: none;
  font-weight: 700;
  padding: 10px 25px;
  color: white;
  height: 40px;
  width: 155px;
  border-radius: 5px;
  margin-left: ${(props) => (props.type === "delete" ? "auto " : "0px")};
  cursor: pointer;
  background-color: ${(props) =>
    props.type === "cancel"
      ? "var(--GrayishBlue)"
      : props.type === "delete" && "var(--SoftRed)"};
  &:hover {
    opacity: 0.6;
  }
`;
export const DialogBox = (props) => {
  return (
    <Container>
      <Box>
        <Title> Delete Comment </Title>
        <Content>
          Are you sure you want to delete this comment ? this will remove the
          comment and can't be undone.
        </Content>
        <ActionButton>
          <Button
            type="cancel"
            onClick={() => {
              props.dialogOpen(false);
            }}
          >
            NO, CANCEL
          </Button>
          <Button
            type="delete"
            onClick={() => {
              props.delete(
                props.commentToDelete.id,
                props.commentToDelete.type
              );
            }}
          >
            YES, DELETE
          </Button>
        </ActionButton>
      </Box>
    </Container>
  );
};
