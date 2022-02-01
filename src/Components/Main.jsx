import { useState } from "react";
import { data } from "../data";
import styled from "styled-components";
import { Comment } from "./Comment";
import { AddComment } from "./AddComment";

const Container = styled.div`
  width: 50%;
  margin: 20px 0px;
`;
export const Main = () => {
  const [comments, setcomments] = useState(data.comments);

  const addComment = (comment) => {
    setcomments([...comments, comment]);
  };

  return (
    <Container>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <AddComment addcomment={addComment} />
    </Container>
  );
};
