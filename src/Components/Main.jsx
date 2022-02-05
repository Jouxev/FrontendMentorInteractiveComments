import { useEffect, useState } from "react";
import { data } from "../data";
import styled from "styled-components";
import { Comment } from "./Comment";
import { AddComment } from "./AddComment";
import { DialogBox } from "./DialogBox";
import { mobile } from "../responsive";

const Container = styled.section`
  width: 50%;
  margin: 20px 0px;
  ${mobile({
    width: "80%",
  })};
`;
export const Main = () => {
  const [comments, setcomments] = useState(data.comments);

  const [commentToDelete, setCommentToDelete] = useState({ id: "", type: "" });

  const addComment = (comment) => {
    setcomments([...comments, comment]);
  };

  const updateComment = (id, commentText) => {
    comments.find((x) => x.id === id).content = commentText;
  };

  const deleteComment = (id, type) => {
    if (dialogOpen) {
      if (type === "comment") {
        setcomments(
          comments.filter((x) => {
            return x.id != id;
          })
        );
        return;
      }
      if (type === "reply") {
        comments.map((comment) => {
          if (comment.replies.length > 0) {
            var index = comment.replies.indexOf(
              comment.replies.find((x) => x.id === id)
            );
            if (index > -1) {
              comment.replies.splice(index, 1);
              setreRender(!reRender);
            }
          }
        });
      }
      setDialogOpen(false);
      setCommentToDelete({});
    } else {
      setCommentToDelete({ id: id, type: type });
      setDialogOpen(true);
    }
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
        var reply = comment.replies.find((x) => x.id === id);
        if (typeof reply !== "undefined") {
          reply.content = content;
        }
      }
    });
  };

  const [reRender, setreRender] = useState(false);

  const toggleRender = () => {
    setreRender(!reRender);
  };
  const [dialogOpen, setDialogOpen] = useState(false);

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
          deletecomment={(id, type) => deleteComment(id, type)}
          id={comment.id}
          addreply={(id, comment) => addReply(id, comment)}
          rerender={toggleRender}
          openDialog={setDialogOpen}
        />
      ))}
      <AddComment addcomment={addComment} rerender={toggleRender} />
      {dialogOpen && (
        <DialogBox
          delete={(id, type) => {
            deleteComment(id, type);
          }}
          dialogOpen={setDialogOpen}
          commentToDelete={commentToDelete}
        />
      )}
    </Container>
  );
};
