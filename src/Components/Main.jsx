import { data } from "../data";
import styled from "styled-components";
import { Comment } from "./Comment";

const Container = styled.div``;
export const Main = () => {
  return (
    <Container>
      {data.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Container>
  );
};
