import React, { useState } from "react";
import { ArrowLeftIcon, CheckIcon } from "@chakra-ui/icons";
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
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { postsState } from "../../atoms/atom";
import { pushQuestion } from "../../firebase";
import Header from "../../../src/components/Header";

const handler = (path) => {
  Router.push(path);
};

const Edit = () => {
  const [posts, setPosts] = useRecoilState(postsState);
  const router = useRouter();
  const toast = useToast();

  const editPost = posts.filter((post) => {
    return post.id === Number(router.query.id);
  });

  const [newTitle, setNewTitle] = useState(editPost[0]?.title);
  const [newText, setNewText] = useState(editPost[0]?.text);

  const handleSetNewTitle = (e) => {
    setNewTitle(e.target.value);
  };
  const handleSetNewText = (e) => {
    setNewText(e.target.value);
  };

  const handleEditPost = (id, title, text) => {
    const foundPost = posts.findIndex((post) => post.id === id);
    if (title === "" || text === "") {
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
        title: title,
        text: text,
      });
    });

    // pushQuestion({
    //   questioner:{
    //     name: editPost[0]?.name,
    //     title: newTitle,
    //     text: newText,
    //     createDate: today(),
    //   },
    //   count:{
    //     all:10,
    //     yes:6,
    //     no:4
    //   }
    // });

    toast({
      title: "保存しました.",
      position: "top",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
    router.push("/editPosts");
  };

  const handleDeletePost = (id) => {
    const result = window.confirm("本当に削除してもよろしいですか?");
    if (result) {
      const foundPost = posts.findIndex((post) => post.id === id);
      const deletePost = [...posts];
      deletePost.splice(foundPost, 1);
      setPosts(deletePost);

      toast({
        title: "削除しました.",
        position: "top",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
      router.push("/editPosts");
    }
  };

  return (
    <>
      <Head>
        <title>みんなの質問</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Container
        h="100vh"
        minH="100%"
        maxW="100%"
        bg="#DDE3DE"
        m="0"
        padding="1rem"
      >
        <Header />

        <Container minH="calc(100% - 64px)" maxW="100%" bg="white" padding="5">
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
                    <Box ml={3}>{editPost[0]?.name}</Box>
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
                    <Box>
                      <Input
                        ml={[0, 6]}
                        borderColor="#bebaba"
                        borderWidth="2px"
                        value={newTitle}
                        onChange={handleSetNewTitle}
                      />
                    </Box>
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
                      onChange={handleSetNewText}
                    />
                  </Flex>
                </FormControl>
                <Divider borderColor="gray" borderBottomWidth="2px" />
              </Stack>
            </Container>
            <Spacer />
          </form>
          <Box pos="absolute" bottom="8" right="0">
            <Button
              background="#F4D1AE"
              _hover={{ opacity: "0.8" }}
              onClick={() => handler("/editPosts")}
              mr="2"
            >
              <ArrowLeftIcon mr="2" />
              戻る
            </Button>
            <Button
              colorScheme="red"
              onClick={() => handleDeletePost(editPost[0]?.id)}
              mr="2"
            >
              削除する
            </Button>
            <Button
              colorScheme="blue"
              color="#FFFFFF"
              mr="28px"
              type="submit"
              onClick={() => handleEditPost(editPost[0]?.id, newTitle, newText)}
            >
              <CheckIcon mr="2" />
              保存
            </Button>
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default Edit;
