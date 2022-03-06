import { ArrowLeftIcon } from "@chakra-ui/icons";
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
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { postsState } from "../../../src/atoms/atom";
import styles from "../../../styles/Container.module.css";
import Header from "../../../src/components/Header";

const handler = (path) => {
  Router.push(path);
};

const Detail = () => {
  const posts = useRecoilValue(postsState);
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
