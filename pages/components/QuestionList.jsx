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
} from "@chakra-ui/react";
import { postsState } from "../atoms/atom";

const TodoList = () => {
  const posts = useRecoilValue(postsState);

  return (
    <>
      <Container h="100%" maxW="100%" mt="5">
        <Table>
          <Thead bg="#F4EDEA">
            <Tr>
              <Th>タスク名</Th>
              <Th>質問内容</Th>
              <Th>作成日時</Th>
            </Tr>
          </Thead>

          <Tbody>
            {posts.map((post) => (
              <Tr key={post.id}>
                <Td display="flex" justifyContent="space-between" h="65.5px">
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

                <Td>{post.title}</Td>
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
