import Link from "next/link";
import { useRecoilValue } from "recoil";
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
import {postsState} from "../atoms/atom"
import UserButton from "./atoms/button/UserButton";
import AddButton from "./atoms/button/AddButton"

const TodoList = () => {
  const posts = useRecoilValue(postsState);
  // const handler = (path) => {
  //   Router.push(path);
  // };

  return (
    <>
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
