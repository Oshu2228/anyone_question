import React, { useRef } from "react";
import {
  AddIcon,
  ArrowLeftIcon,
  EditIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { postsState } from "../../atoms/atom";

const handler = (path) => {
  Router.push(path);
};

const Detail = () => {
  const posts = useRecoilValue(postsState);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const router = useRouter();

  const post = posts.filter((post) => {
    return post.id === Number(router.query.id);
  });

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
        <Heading pt="2" pb="2" pl="5" bg="#C5D8D1">
          <Flex alignItems="center">
            {/* エラー文 404 (Not Found) */}
            <HamburgerIcon ref={btnRef} onClick={onOpen} mr="24px" />

            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Your account</DrawerHeader>

                <DrawerBody>
                  <Flex mb="24px" alignItems="center">
                    <Avatar src="https://bit.ly/broken-link" mr="8px" />
                    <Text>リヴァイ</Text>
                  </Flex>

                  <Flex
                    alignItems="center"
                    cursor="pointer"
                    onClick={() => handler("/posting")}
                    _hover={{ background: "#8FBFE0", borderRadius: "20px" }}
                  >
                    <AddIcon mr="8px" />
                    <Text lineHeight="48px">質問を作成</Text>
                  </Flex>

                  <Flex
                    alignItems="center"
                    mb="16px"
                    _hover={{ background: "#8FBFE0", borderRadius: "20px" }}
                  >
                    <EditIcon mr="8px" />
                    <Text lineHeight="48px">作成した質問を編集</Text>
                  </Flex>
                  <Box textAlign="center">
                    <Button
                      mt="40px"
                      colorScheme="red"
                      onClick={() => handler("/")}
                    >
                      Log Out
                    </Button>
                  </Box>
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Text>みんなの質問</Text>
          </Flex>
        </Heading>

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
              </Stack>
            </Container>
            <Spacer />

            <Stack
              spacing={[1, 5]}
              direction={["column", "row"]}
              justify="center"
            >
              
                <Text fontSize={32}>Yes:{post[0]?.yes}</Text>

                <Text fontSize={32}>No:{post[0]?.no}</Text>
             
            </Stack>

            <Box pos="absolute" bottom="8" right="0">
              <Button
                background="#F4D1AE"
                _hover={{ opacity: "0.8" }}
                onClick={() => handler("/user")}
                mr="2"
              >
                <ArrowLeftIcon mr="2" />
                戻る
              </Button>
              <Button
                colorScheme="cyan"
                color="#FFFFFF"
                mr="28px"
                w="88px"
                onClick={() => handler(`/user/${post.id}/answer`)}
              >
                回答する
              </Button>
            </Box>
          </form>
        </Container>
      </Container>
    </>
  );
};

export default Detail;
