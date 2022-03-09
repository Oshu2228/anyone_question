import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  Container,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Box,
} from "@chakra-ui/react";
import Router from "next/router";
import { postsState } from "../atoms/atom";
import UserButton from "./atoms/button/UserButton";
import AddButton from "./atoms/button/AddButton";
import { db } from "../../src/base/firebase";
import { useEffect } from "react";

const handler = (path) => {
  Router.push(path);
};
const TodoList = () => {
  const [posts, setPosts] = useRecoilState(postsState);
 
  useEffect(() => {
    const unSub = db.collection("question").onSnapshot((snapshot) => {
      setPosts([
        ...snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          name: doc.data().name,
          text: doc.data().text,
          comment: doc.data().comment,
          
          // createDate: doc.data().timestamp.toDate(),
        })),
      ]);
    });
    return () => unSub();
  }, []);

  console.log(posts);

  return (
    <>
      {/* {tasks.map((task)=><h3>{task.title}</h3>)} */}
      <AddButton />
      <Container h="100%" maxW="100%" mt="5">
        <Table>
          <Thead bg="#F4EDEA">
            <Tr>
              <Th>名前</Th>
              <Th>質問内容</Th>
              <Th>作成日時</Th>
            </Tr>
          </Thead>

          <Tbody>
            {posts.map((post) => (
              <Tr key={post.id}>
                <Td h="65.5px">
                  <Link href={`/todos/${post.id}`} passHref>
                    <Text
                      cursor="pointer"
                      _hover={{ opacity: 0.7 }}
                      lineHeight="32.5px"
                    >
                      {post.name}
                    </Text>
                  </Link>
                </Td>

                <Td>
                  <Box display="flex">
                    <Text lineHeight="40px">{post.title}</Text>
                    <Box ml="auto">
                      <UserButton
                        colorScheme={"purple"}
                        text={"詳細"}
                        onClick={() => handler(`/user/${post.id}/detail`)}
                      />
                      <UserButton
                        colorScheme={"teal"}
                        text={"回答"}
                        onClick={() => handler(`/user/${post.id}/answer`)}
                      />
                    </Box>
                  </Box>
                </Td>
                <Td>{post.createDate}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </>
  );
};

export default TodoList;
