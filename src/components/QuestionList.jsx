import { useRecoilValue } from "recoil";
import { Container, Wrap, WrapItem } from "@chakra-ui/react";
import Router from "next/router";
import { postsState } from "../atoms/atom";
import UserCard from "./UserCard";

const handler = (path) => {
  Router.push(path);
};
const PostList = () => {
  const posts = useRecoilValue(postsState);

  return (
    <>
      <Container h="100%" maxW="100%" mt="5">
        <Wrap p={{ base: 2 }}>
          {posts.map((post) => (
            <WrapItem key={post.id} mx="auto">
              <UserCard
                name={post.name}
                title={post.title}
                text={post.text}
                detailClick={() => handler(`/user/${post.id}/detail`)}
                clickFunction={() => handler(`/user/${post.id}/answer`)}
                buttonName={"回答する"}
                bg={"blue.400"}
                hoverColor={"blue.500"}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    </>
  );
};

export default PostList;
