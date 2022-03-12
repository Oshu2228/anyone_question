// 回答画面
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Spacer,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import Header from "../../../src/components/Header";
import styles from "../../../styles/Container.module.css";
import { postsState } from "../../../src/atoms/atom";
import BackButton from "../../../src/components/atoms/button/BackButton";
import UserButton from "../../../src/components/atoms/button/UserButton";
import { db } from "../../../src/base/firebase";
import firebase from "firebase";
const handler = (path) => {
  Router.push(path);
};

const useAnswer = () => {
  const [posts, setPosts] = useRecoilState(postsState);
  const [value, setValue] = useState();
  const router = useRouter();
  const toast = useToast();
  const post = posts.filter((post) => {
    return post.id === router.query.id;
  });

  const sentAnswer = (id, value) => {
    const foundPost = posts.findIndex((post) => post.id === id);
    if (value === "") {
      return toast({
        title: "文字を入力してください",
        position: "top",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
    const replaceItemAtIndex = (posts, foundPost, newValue) => {
      return [
        ...posts.slice(0, foundPost),
        newValue,
        ...posts.slice(foundPost + 1),
      ];
    };
    setPosts(() => {
      return replaceItemAtIndex(posts, foundPost, {
        ...posts[foundPost],
        value: [value],
      });
    });

    toast({
      title: "保存しました.",
      position: "top",
      status: "success",
      duration: 1000,
      isClosable: true,
    });

    db.collection("question").doc(id).update({
      comment: firebase.firestore.FieldValue.arrayUnion(value)
    },{merge:true});

    router.push("/user");
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
                    <Box ml={3}>{post[0]?.title}</Box>
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
                    <Box ml={3}>{post[0]?.text}</Box>
                  </Flex>
                </FormControl>
                <Divider borderColor="gray" borderBottomWidth="2px" />
                <FormControl>
                  <Flex direction={["column", "row"]}>
                    <Flex minW={24} width={24}>
                      <FormLabel>回答</FormLabel>
                      <Spacer />
                      <Box>:</Box>
                    </Flex>
                    <Textarea
                      ml={[0, 6]}
                      borderColor="#bebaba"
                      borderWidth="2px"
                      h="32px"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </Flex>
                </FormControl>
              </Stack>
            </Container>
            <Spacer />

            <Box pos="absolute" bottom="8" right={6}>
              <BackButton onClick={() => handler("/user")} />
              <UserButton
                colorScheme={"linkedin"}
                text={"送信"}
                onClick={() => sentAnswer(post[0]?.id, value)}
              />
            </Box>
          </form>
        </Container>
      </Container>
    </>
  );
};

export default useAnswer;
