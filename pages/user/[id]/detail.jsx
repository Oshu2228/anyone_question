// 詳細画面
import {
  Box,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { postsState } from "../../../src/atoms/atom";
import styles from "../../../styles/Container.module.css";
import Header from "../../../src/components/Header";
import BackButton from "../../../src/components/atoms/button/BackButton";
const handler = (path) => {
  Router.push(path);
};

const useDetail = () => {
  const posts = useRecoilValue(postsState);
  const router = useRouter();
  const post = posts.filter((post) => {
    return post.id === router.query.id;
  });

  return (
    <>
      <Head>
        <title>Detail edtalk</title>
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
                    </Flex>
                    <Box ml={3}>{post[0]?.title}</Box>
                  </Flex>
                </FormControl>
                <Divider borderColor="gray" borderBottomWidth="2px" />
                <FormControl>
                  <Flex minH={24} direction={["column", "row"]}>
                    <Flex minW={24} width={24}>
                      <FormLabel>質問内容</FormLabel>
                      <Spacer />
                    </Flex>
                    <Box ml={3}>{post[0]?.text}</Box>
                  </Flex>
                </FormControl>
                <Divider borderColor="gray" borderBottomWidth="2px" />
                <FormControl>
                  <Flex minH={24} direction={["column", "row"]}>
                    <Flex minW={24} width={24}>
                      <FormLabel>回答一覧</FormLabel>
                      <Spacer />
                    </Flex>
                    <Box ml={3}>
                      <ul>
                        {post[0]?.comment.map((com, index) => (
                          <li key={index}>{com}</li>
                        ))}
                      </ul>
                    </Box>
                  </Flex>
                </FormControl>
              </Stack>
              <Box display="flex" justifyContent="flex-end" mt={4}>
                <BackButton onClick={() => handler("/user")} />
              </Box>
            </Container>
            <Spacer />
          </form>
        </Container>
      </Container>
    </>
  );
};

export default useDetail;
