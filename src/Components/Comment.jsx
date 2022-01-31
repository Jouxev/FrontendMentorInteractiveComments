import { useState } from "react";
import styled from "styled-components";
import { MdDelete, MdEdit, MdReply } from "react-icons/md";

const Container = styled.div`
  background-color: var(--White);
  height: auto;
  width: 80%;
  border-radius: 5px;
  display: flex;
  padding: 10px;
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
  color: var(--LightGrayishBlue);
  cursor: pointer;
  &:hover {
    color: var(--ModerateBlue);
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
const CommentText = styled.p`
  font-weight: 400;
  color: var(--GrayishBlue);
`;
const Tagged = styled.span`
  font-weight: 500;
  color: var(--ModerateBlue);
`;
export const Comment = () => {
  const [num, setnum] = useState(1);

  return (
    <Container>
      <Left>
        <NumOperation onClick={() => setnum(num + 1)}> + </NumOperation>
        <Num> {num} </Num>
        <NumOperation onClick={() => setnum(num - 1)}> - </NumOperation>
      </Left>
      <Right>
        <AuthorContainer>
          <AuthorPic
            src="https://avatars.githubusercontent.com/u/19846591?s=40&v=4"
            alt="username"
          />
          <AuthorUsername> Youcef Haroun </AuthorUsername>
          <Tag> You </Tag>
          <CreateddAt> 1 month a go</CreateddAt>
          <ActionButtons>
            <ActionItem delete>
              <MdDelete /> Delete
            </ActionItem>
            <ActionItem>
              <MdEdit /> Edit{" "}
            </ActionItem>
            <ActionItem>
              <MdReply /> Reply{" "}
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
