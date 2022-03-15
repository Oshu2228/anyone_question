// ログイン画面
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { auth } from "../src/base/firebase";
import GoogleLogin from "../src/hooks/GoogleLogin";
import { useState } from "react";
import { useRouter } from "next/router";
import { FcGoogle, FcPrivacy } from "react-icons/fc";
import Link from "next/link";
import { UnlockIcon } from '@chakra-ui/icons'

export default function SimpleCard() {
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

  const { handleGoogleLogin } = GoogleLogin();

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <UnlockIcon w={12} h={12}/>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}></Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </FormControl>
            {error && (
              <p style={{ color: "red" }}>
                メールアドレスとパスワードが一致していません
              </p>
            )}
            <Stack spacing={5}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              ></Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                Sign in
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
              <Box color="blue.200" fontSize={12}>
                <Link href="/signUp">
                  <a>アカウントをお持ちをお持ちでない方はこちら</a>
                </Link>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
