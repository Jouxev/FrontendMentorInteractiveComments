import { data } from "../data";
import styled from "styled-components";
import { Comment } from "./Comment";
import { AddComment } from "./AddComment";

const Container = styled.div`
  width: 60%;
  margin: 20px 0px;
`;
export const Main = () => {
  return (
    <Container>
      {data.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <AddComment />
    </Container>
  );
};
