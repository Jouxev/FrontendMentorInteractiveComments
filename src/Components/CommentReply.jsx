import styled from "styled-components";
import { Comment } from "./Comment";

const Container = styled.div`
  height: auto;
  width: 90%;
  margin-left: auto;
  padding-left: 40px;
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    left: 10px;
    top: 0;
    bottom: 0;
    border: 2px solid var(--LightGray);
    border-width: 0 0 0 2px;
  }
`;

export const CommentReply = (props) => {
  return (
    <Container>
      {props.replies.map((reply) => (
        <Comment
          type="reply"
          comment={reply}
          key={reply.id}
          id={reply.id}
          updatereply={(id, content) => {
            props.updatereply(id, content);
          }}
          addreply={(id, comment) => {
            props.addreply(id, comment);
          }}
          deletecomment={(id, type) => props.deletecomment(id, type)}
          belongsTo={props.commentbelong}
          rerender={props.rerender}
          openDialog={props.openDialog}
        />
      ))}
    </Container>
  );
};
