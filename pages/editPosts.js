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

import Router from "next/router";
import { postsState } from "../src/atoms/atom";
import Head from "next/head";
import { AddIcon } from "@chakra-ui/icons";
import Header from "../src/components/Header";
import BackButton from "../src/components/atoms/button/BackButton";
import UserButton from "../src/components/atoms/button/UserButton";
import styles from "../styles/Container.module.css";
import AddButton from "../src/components/atoms/button/AddButton";

const Edit = () => {
  const posts = useRecoilValue(postsState);
  const handler = (path) => {
    Router.push(path);
  };

  return (
    <>
      <Head>
        <title>みんなの質問</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Container className={styles.mainContainer}>
        <Header />
        <Container className={styles.subContainer}>
          <AddButton/>
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
                      <Text _hover={{ opacity: 0.7 }} lineHeight="32.5px">
                        {post.name}
                      </Text>
                    </Td>
                    <Td>
                      <Box display="flex">
                        <Text lineHeight="40px">{post.title}</Text>
                        <UserButton
                          text={"編集"}
                          colorScheme={"green"}
                          onClick={() => handler(`/user/${post.id}/edit`)}
                        />
                      </Box>
                    </Td>
                    <Td>{post.createDate}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Container>
          <Box pos="absolute" bottom={8} right={6}>
            <BackButton onClick={() => handler("/user")} />
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default Edit;
