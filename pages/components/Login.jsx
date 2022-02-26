import Head from "next/head";
import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import Router from "next/router";
const handler = (path) => {
  Router.push(path);
};

const Login = () => {
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
          <Text>みんなの質問</Text>
        </Heading>

        <Container
          minH="calc(100% - 64px)"
          maxW="100%"
          bg="#f1f5f9"
          padding="5"
        >
          <Flex align="center" justify="center" height="100vh" >
            <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
              <Box textAlign="center">
                <LockIcon boxSize={8} />
                <Text fontWeight="bold" fontSize="24px">
                  Log In
                </Text>
              </Box>
              <Stack spacing={6} py={4} px={10}>
                <Input type="text" placeholder="ユーザーid" />
                <Input type="password" placeholder="パスワード" />
                <Button colorScheme="blue" onClick={() => handler("/user")}>
                  ログイン
                </Button>
              </Stack>
            </Box>
          </Flex>
        </Container>
      </Container>
    </>
  );
};

export default Login;
