import { useState } from "react";
import styled from "styled-components";
import { MdDelete, MdEdit, MdReply } from "react-icons/md";

import DeleteIcon from "../assets/images/icon-delete.svg";
import EditIcon from "../assets/images/icon-edit.svg";
import ReplyIcon from "../assets/images/icon-reply.svg";

import PlusIcon from "../assets/images/icon-plus.svg";
import MinusIcon from "../assets/images/icon-minus.svg";

const Container = styled.div`
  background-color: var(--White);
  height: auto;
  width: 75%;
  border-radius: 5px;
  display: flex;
  padding: 10px;
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
  &:hover {
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
const Tagged = styled.span`
  font-weight: 500;
  color: var(--ModerateBlue);
`;
export const Comment = (props) => {
  const [num, setnum] = useState(props.comment.score);

  return (
    <Container>
      <Left>
        <NumOperation onClick={() => setnum(num + 1)}>
          {" "}
          <Icon src={PlusIcon} alt={"+"} />{" "}
        </NumOperation>
        <Num> {props.comment.score} </Num>
        <NumOperation onClick={() => setnum(num - 1)}>
          {" "}
          <Icon src={MinusIcon} alt={"-"} />{" "}
        </NumOperation>
      </Left>
      <Right>
        <AuthorContainer>
          <AuthorPic
            src={props.comment.user.image.png}
            alt={props.comment.username}
          />
          <AuthorUsername> {props.comment.user.username} </AuthorUsername>
          <Tag> You </Tag>
          <CreateddAt> 1 month a go</CreateddAt>
          <ActionButtons>
            <ActionItem delete>
              <Icon src={DeleteIcon} alt="delete" /> Delete
            </ActionItem>
            <ActionItem>
              <Icon src={EditIcon} alt="edit" /> Edit{" "}
            </ActionItem>
            <ActionItem>
              <Icon src={ReplyIcon} alt="reply" /> Reply{" "}
            </ActionItem>
          </ActionButtons>
        </AuthorContainer>
        <CommentText>
          <Tagged>@Tebbon</Tagged> Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </CommentText>
      </Right>
    </Container>
  );
};
