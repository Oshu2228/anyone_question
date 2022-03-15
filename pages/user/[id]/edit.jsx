// 編集画面
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import Header from "../../../src/components/Header";
import styles from "../../../styles/Container.module.css";
import { postsState } from "../../../src/atoms/atom";
import UserButton from "../../../src/components/atoms/button/UserButton";
import BackButton from "../../../src/components/atoms/button/BackButton";
import UseDeletePost from "../../../src/hooks/UseDeletePost";
import UseEidtPost from "../../../src/hooks/UseEidtPost";

const handler = (path) => {
  Router.push(path);
};

const useEdit = () => {
  const posts = useRecoilValue(postsState);
  const [newTitle, setNewTitle] = useState();
  const [newText, setNewText] = useState();
  const { query, isReady } = useRouter();

  
  useEffect(() => {
    if (isReady) {
      setNewTitle(post[0]?.title);
      setNewText(post[0]?.text);
    } else {
      return ;
    }
  }, [isReady]);
  console.log(isReady);
  const post = posts.filter((post) => {
    return post.id === query.id;
  });
  console.log(post[0]?.title);

  // Post更新用カスタムフック
  const { handleEditPost } = UseEidtPost();
  // Post削除用カスタムフック
  const { handleDeletePost } = UseDeletePost();

  return (
    <>
      <Head>
        <title>Edit edtalk</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Container className={styles.mainContainer}>
        <Header />
        <Container className={styles.subContainer}>
          <form>
            <Container py={["20px", "60px"]} maxW="container.lg">
              <Stack spacing={[2, 6]}>
                <FormControl>
                  <Flex direction={["column", "row"]}>
                    <Flex minW={24} width={24}>
                      <FormLabel>名前</FormLabel>
                      <Spacer />
                      <Box>:</Box>
                    </Flex>
                    <Box ml={3}>{post[0]?.name}</Box>
                  </Flex>
                </FormControl>
                <Divider borderColor="gray" borderBottomWidth="2px" />
                <FormControl>
                  <Flex direction={["column", "row"]}>
                    <Flex minW={24} width={24}>
                      <FormLabel>タイトル</FormLabel>
                      <Spacer />
                      <Box>:</Box>
                    </Flex>
                    <Input
                      ml={[0, 6]}
                      borderColor="#bebaba"
                      borderWidth="2px"
                      h="32px"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                    />
                  </Flex>
                </FormControl>
                <Divider borderColor="gray" borderBottomWidth="2px" />
                <FormControl>
                  <Flex minH={44} direction={["column", "row"]}>
                    <Flex minW={24} width={24}>
                      <FormLabel>質問内容</FormLabel>
                      <Spacer />
                      <Box>:</Box>
                    </Flex>
                    <Textarea
                      ml={[0, 6]}
                      borderColor="#bebaba"
                      borderWidth="2px"
                      h="180px"
                      value={newText}
                      onChange={(e) => setNewText(e.target.value)}
                    />
                  </Flex>
                </FormControl>
                <Divider borderColor="gray" borderBottomWidth="2px" />
              </Stack>
            </Container>
            <Spacer />
          </form>
          <Box pos="absolute" bottom="8" right="0">
            <BackButton onClick={() => handler("/editPosts")} />
            <Button
              colorScheme="red"
              onClick={() => handleDeletePost(post[0]?.id)}
              mr="2"
            >
              削除する
            </Button>
            <UserButton
              colorScheme={"blue"}
              text={"保存"}
              onClick={() => handleEditPost(post[0]?.id, newTitle, newText)}
            />
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default useEdit;
