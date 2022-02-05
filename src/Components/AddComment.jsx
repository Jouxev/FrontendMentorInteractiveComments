import { useEffect, useState } from "react";
import styled from "styled-components";
import { data } from "../data";

const Container = styled.div`
  background-color: var(--White);
  height: auto;
  width: 100%;
  border-radius: 5px;
  display: flex;
  padding: 10px 20px;
  margin-bottom: 20px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
`;

const Center = styled.div`
  flex: 10;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 60px;
  padding: 5px 10px;
  border: 1px solid var(--LightGray);
  outline: none;
  color: var(--DarkBlue);
  border-radius: 5px;
  cursor: pointer;
  resize: none;
  &:focus {
    outline: 1px solid var(--DarkBlue);
  }
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const Button = styled.button`
  background-color: var(--ModerateBlue);
  padding: 10px 20px;
  color: var(--White);
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  border: none;
  &:hover {
    opacity: 0.4;
  }
`;

export const AddComment = (props) => {
  const [commentText, setcommentText] = useState("");

  const [reply, setReply] = useState({
    id: Math.floor(Math.random() * 100),
    content: commentText,
    createdAt: "just Now",
    score: 0,
    replyTo: props.replyToCommentAuthor,
    user: {
      image: {
        png: data.currentUser.image.png,
        webp: data.currentUser.image.webp,
      },
      username: data.currentUser.username,
    },
  });

  const [comment, setComment] = useState({
    id: Math.floor(Math.random() * 100),
    content: commentText,
    createdAt: "just Now ",
    score: 0,
    user: {
      image: {
        png: data.currentUser.image.png,
        webp: data.currentUser.image.webp,
      },
      username: data.currentUser.username,
    },
    replies: [],
  });

  useEffect(() => {
    setcommentText(props.type === "reply" ? "@" + props.replyTo + " " : "");
  }, []);

  useEffect(() => {
    setComment({
      ...comment,
      content: commentText,
      id: Math.floor(Math.random() * 100),
    });

    setReply({
      ...reply,
      content: commentText,
      id: Math.floor(Math.random() * 100),
    });
  }, [commentText]);

  return (
    <Container>
      <Right>
        <Avatar src={data.currentUser.image.png} />
      </Right>
      <Center>
        {props.type === "reply" ? (
          <TextArea
            autoFocus
            placeholder="Add Reply ..."
            value={commentText}
            onChange={(e) => setcommentText(e.target.value)}
          />
        ) : (
          <TextArea
            autoFocus
            placeholder="Add Comment ..."
            value={commentText}
            onChange={(e) => setcommentText(e.target.value)}
          />
        )}
      </Center>
      <Left>
        {props.type === "reply" ? (
          <Button
            onClick={() => {
              if (props.commentTo === "reply") {
                props.addreply(props.commentbelong, reply);
              } else {
                props.addreply(props.replyToCommentId, reply);
              }

              props.setreply(false);
              props.rerender();
              setcommentText("");
            }}
          >
            REPLY
          </Button>
        ) : (
          <Button
            onClick={() => {
              props.addcomment(comment);
              setcommentText("");
            }}
          >
            SEND
          </Button>
        )}
      </Left>
    </Container>
  );
};
