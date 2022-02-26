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
  Heading,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Avatar,
  DrawerFooter,
  useDisclosure,
} from "@chakra-ui/react";

import Router from "next/router";
import { postsState } from "./atoms/atom";
import Head from "next/head";
import {
  AddIcon,
  ArrowLeftIcon,
  CheckIcon,
  EditIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { useRef } from "react";
const handler = (path) => {
  Router.push(path);
};

const Edit = () => {
  const posts = useRecoilValue(postsState);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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
                    cursor="pointer"
                    mb="16px"
                    _hover={{ background: "#8FBFE0", borderRadius: "20px" }}
                    onClick={() => handler("/editPosts")}
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
                        <Button
                          colorScheme="green"
                          ml="auto"
                          mr={2}
                          onClick={() => handler(`/user/${post.id}/edit`)}
                        >
                          編集
                        </Button>
                      </Box>
                    </Td>
                    <Td>{post.createDate}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Container>
          <Box pos="absolute" bottom="8" right="0">
            <Button
              background="#F4D1AE"
              _hover={{ opacity: "0.8" }}
              onClick={() => handler("/editPosts")}
             mr={8}
            >
              <ArrowLeftIcon mr="2" />
              戻る
            </Button>
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default Edit;
