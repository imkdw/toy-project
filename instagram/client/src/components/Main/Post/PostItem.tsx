import styled from "styled-components";
import { IPost } from "../../../types/post";
import AddComment from "./AddComment";
import PostAuthor from "./PostAuthor";
import PostButton from "./PostButton";
import PostData from "./PostData";
import PostImage from "./PostImage";
import PostLike from "./PostLike";

const StyledPostItem = styled.li`
  width: 100%;
  height: 830px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #dbdbdb;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    height: 780px;
  }
`;

const PostItemWrapper = styled.div`
  width: 95%;
  height: 183px;
`;

const PostItem = ({ author, content, images, likeCount, profile, createdAt, nickname }: IPost) => {
  return (
    <StyledPostItem>
      <PostAuthor author={nickname} profile={profile} />
      <PostImage images={images} />
      <PostItemWrapper>
        <PostButton />
        <PostLike likeCount={likeCount} />
        <PostData author={nickname} content={content} createdAt={createdAt} />
      </PostItemWrapper>
      <AddComment />
    </StyledPostItem>
  );
};

export default PostItem;
