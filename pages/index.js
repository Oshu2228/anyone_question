import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaSignInAlt } from "react-icons/fa";
import GoogleLogin from "../src/hooks/GoogleLogin";
import Router from "next/router";
import Link from "next/link";

export default function SplitScreen() {
  const { handleGoogleLogin } = GoogleLogin();
  const handler = (path) => {
    Router.push(path);
  };
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              教育者支援アプリ
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              みんなの先生
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            生徒に対して抱えている悩みを先生たちに共有してみませんか？
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              w={"full"}
              maxW={"md"}
              variant={"outline"}
              leftIcon={<FaSignInAlt />}
              onClick={() => handler("/signUp")}
            >
              <Center>
                <Text>新規登録</Text>
              </Center>
            </Button>

            <Button
              w={"full"}
              maxW={"md"}
              variant={"outline"}
              leftIcon={<FcGoogle />}
              onClick={handleGoogleLogin}
            >
              <Center>
                <Text>Googleでサインイン</Text>
              </Center>
            </Button>
          </Stack>
          <Box color="blue.200">
            <Link href="login">
              <a>アカウントをお持ちの方はこちら</a>
            </Link>
          </Box>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2Nob29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          }
        />
      </Flex>
    </Stack>
  );
}
