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

  const updateComment = (id, commentText) => {
    comments.find((x) => x.id === id).content = commentText;
  };

  const deleteComment = (id) => {
    comments.filter((x) => {
      return x.id != id;
    });
  };

  const addReply = (id, comment) => {
    comments.find((x) => x.id === id).replies = [
      ...comments.find((x) => x.id === id).replies,
      comment,
    ];
  };

  const updateReply = (id, content) => {
    comments.map((comment) => {
      if (comment.replies.length > 0) {
        return (comment.replies.find((x) => x.id === id).content = content);
      }
    });
  };

  return (
    <Container>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          updatecomment={(id, content) => {
            updateComment(id, content);
          }}
          updatereply={(id, content) => {
            updateReply(id, content);
          }}
          id={comment.id}
          addreply={(id, comment) => addReply(id, comment)}
        />
      ))}
      <AddComment addcomment={addComment} />
    </Container>
  );
};
