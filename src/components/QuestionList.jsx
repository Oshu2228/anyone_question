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
} from "@chakra-ui/react";
import { postsState } from "../atoms/atom";
import Router from "next/router";
import { AddIcon } from "@chakra-ui/icons";
import DetailButton from "./atoms/button/DetailButton";
import AnswerButton from "./atoms/button/AnswerButton";
const handler = (path) => {
  Router.push(path);
};

const TodoList = () => {
  const posts = useRecoilValue(postsState);

  return (
    <>
      <Box mt="10" mr="5" textAlign="right">
        <Button
          background="#F4D1AE"
          _hover={{ opacity: "0.8" }}
          onClick={() => handler("/posting")}
        >
          <AddIcon mr="2" />
          新規投稿
        </Button>
      </Box>
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

                    <DetailButton
                      onClick={() => handler(`/user/${post.id}/detail`)}
                    />
                    <AnswerButton
                      onClick={() => handler(`/user/${post.id}/answer`)}
                    />
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
