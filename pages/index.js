import Head from "next/head";
import React, { useState } from "react";
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
import { useRouter } from "next/router";
import { auth, provider } from "../src/base/firebase";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      router.push("/user");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  const handleGoogleLogin = async (event) => {
    try {
      await auth.signInWithPopup(provider);
      router.push("/user");
    } catch (error) {
      console.log(error);
      setError(error.message);
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
        <Heading pt="2" pb="2" pl="5" bg="#C5D8D1">
          <Text>みんなの質問</Text>
        </Heading>

        <Container
          minH="calc(100% - 64px)"
          maxW="100%"
          bg="#f1f5f9"
          padding="5"
        >
          {/* <h1>ユーザ登録 {user.email}</h1> */}
          <Flex align="center" justify="center" height="100vh">
            <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
              <Box textAlign="center">
                <LockIcon boxSize={8} />
                <Text fontWeight="bold" fontSize="24px">
                  Log In
                </Text>
              </Box>
              <Stack spacing={6} py={4} px={10}>
                <Input
                  name="email"
                  type="email"
                  placeholder="email"
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
                {error && (
                  <p style={{ color: "red" }}>
                    メールアドレスとパスワードが一致していません
                  </p>
                )}
                <Button colorScheme="blue" onClick={handleSubmit}>
                  ログイン
                </Button>
                <Button colorScheme="teal" onClick={handleGoogleLogin}>
                  Googleアカウントをお持ちの方
                </Button>
                <Box
                  color="#3399FF"
                  fontSize="12px"
                  _hover={{ opacity: "0.5" }}
                >
                  <Link href="/SignUp">
                    <a>ユーザー登録はこちらから</a>
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Flex>
        </Container>
      </Container>
    </>
  );
};

export default Login;
