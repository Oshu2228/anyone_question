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
  Button,
  Flex,
} from "@chakra-ui/react";
import { postsState } from "../atoms/atom";
import Router from "next/router";
const handler = (path) => {
  Router.push(path);
};

const TodoList = () => {
  const posts = useRecoilValue(postsState);

  return (
    <>
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
                    <Button
                      colorScheme="green"
                      ml="auto"
                      mr={2}
                      onClick={() => handler(`/user/${post.id}/detail`)}
                    >
                      詳細
                    </Button>
                    <Button
                      colorScheme="cyan"
                      color="#FFFFFF"
                      mr={2}
                      onClick={() => handler(`/user/${post.id}/answer`)}
                    >
                      回答
                    </Button>
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
