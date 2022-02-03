import { useState } from "react";
import styled from "styled-components";

import { data } from "../data";
import DeleteIcon from "../assets/images/icon-delete.svg";
import EditIcon from "../assets/images/icon-edit.svg";
import ReplyIcon from "../assets/images/icon-reply.svg";

import { ReactComponent as PlusIcon } from "../assets/images/icon-plus.svg";
import { ReactComponent as MinusIcon } from "../assets/images/icon-minus.svg";
import { CommentReply } from "./CommentReply";
import { AddComment } from "./AddComment";

const Container = styled.div``;

const CommentContainer = styled.div`
  background-color: var(--White);
  height: auto;
  width: 100%;
  border-radius: 5px;
  display: flex;
  padding: 10px 20px;
  margin-bottom: 20px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 15px;
  height: 60px;
  border-radius: 10px;
  background-color: var(--VeryLightGray);
`;
const NumOperation = styled.div`
  fill: var(--LightGrayishBlue);
  cursor: pointer;
  &:hover svg path {
    fill: var(--ModerateBlue);
  }
`;
const Num = styled.div`
  color: var(--ModerateBlue);
`;

const Right = styled.div`
  width: 100%;
  margin: 0px 20px;
`;
const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const AuthorPic = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
const AuthorUsername = styled.span`
  margin: 0px 10px;
  font-weight: 500;
  font-size: 14px;
  color: var(--DarkBlue);
`;
const Tag = styled.div`
  background-color: var(--ModerateBlue);
  color: var(--White);
  padding: 2px 5px;
  border-radius: 1px;
  margin-right: 5px;
  font-size: 12px;
  display: flex;
  align-items: center;
`;
const CreateddAt = styled.span`
  font-size: 14px;
  color: var(--GrayishBlue);
  margin-left: 10px;
`;
const ActionButtons = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;
const ActionItem = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
  font-weight: 500;
  color: ${(props) =>
    props.delete ? "var(--SoftRed)" : "var(--ModerateBlue)"};
  &:hover {
    opacity: 0.4;
  }
`;
const Icon = styled.img`
  margin-right: 5px;
`;
const CommentText = styled.p`
  font-weight: 400;
  color: var(--GrayishBlue);
`;
const ActionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  background-color: var(--ModerateBlue);
  padding: 10px 10px;
  color: var(--White);
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  border: none;
  &:hover {
    opacity: 0.4;
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 60px;
  margin: 10px 0px;
  padding: 5px 0px;
  border: 1px solid var(--LightGray);
  outline: none;
  color: var(--DarkBlue);
  border-radius: 5px;
  resize: none;
  &:focus {
    outline: 1px solid var(--DarkBlue);
  }
`;
const Tagged = styled.span`
  font-weight: 500;
  color: var(--ModerateBlue);
`;
export const Comment = (props) => {
  const [num, setnum] = useState(props.comment.score);

  const [reply, setReply] = useState(false);
  const [edit, setEdit] = useState(false);

  const [editingComment, setEditingComment] = useState(props.comment.content);

  return (
    <Container>
      <CommentContainer>
        <Left>
          <NumOperation onClick={() => setnum(num + 1)}>
            <PlusIcon />
          </NumOperation>
          <Num> {num} </Num>
          <NumOperation onClick={() => setnum(num - 1)}>
            <MinusIcon />
          </NumOperation>
        </Left>
        <Right>
          <AuthorContainer>
            <AuthorPic
              src={props.comment.user.image.png}
              alt={props.comment.username}
            />
            <AuthorUsername> {props.comment.user.username} </AuthorUsername>
            {data.currentUser.username === props.comment.user.username && (
              <Tag> You </Tag>
            )}
            <CreateddAt> {props.comment.createdAt}</CreateddAt>

            {data.currentUser.username === props.comment.user.username ? (
              <ActionButtons>
                <ActionItem delete>
                  <Icon src={DeleteIcon} alt="delete" /> Delete
                </ActionItem>
                <ActionItem
                  onClick={() => {
                    setEdit(!edit);
                  }}
                >
                  <Icon src={EditIcon} alt="edit" />
                  {edit ? "Undo" : "Edit"}
                </ActionItem>
              </ActionButtons>
            ) : (
              <ActionButtons>
                <ActionItem onClick={() => setReply(!reply)}>
                  <Icon src={ReplyIcon} alt="reply" />
                  {reply ? "Undo" : "Reply"}
                </ActionItem>
              </ActionButtons>
            )}
          </AuthorContainer>
          {!edit && (
            <CommentText>
              <Tagged>
                {props.comment.replyingTo &&
                  "@" + props.comment.replyingTo + " "}
              </Tagged>
              {props.comment.content}
            </CommentText>
          )}

          {props.comment.user.username === data.currentUser.username &&
            edit && (
              <TextArea
                autoFocus
                value={editingComment}
                onChange={(e) => setEditingComment(e.target.value)}
              />
            )}

          {edit && (
            <ActionContainer>
              <Button
                onClick={() => {
                  props.type === "reply"
                    ? props.updatereply(props.id, editingComment)
                    : props.updatecomment(props.id, editingComment);
                  setEdit(!edit);
                }}
              >
                UPDATE
              </Button>
            </ActionContainer>
          )}
        </Right>
      </CommentContainer>
      {props.comment.replies && props.comment.replies.length > 0 && (
        <CommentReply
          replies={props.comment.replies}
          updatereply={(id, content) => {
            props.updatereply(id, content);
          }}
          addreply={(id, comment) => {
            props.addreply(id, comment);
          }}
        />
      )}
      {reply && (
        <AddComment
          type="reply"
          addreply={(id, comment) => {
            props.addreply(id, comment);
          }}
          setreply={setReply}
          replyTo={props.comment.user.username}
          replyToCommentId={props.comment.id}
          replyToCommentAuthor={props.comment.user.username}
        />
      )}
    </Container>
  );
};
