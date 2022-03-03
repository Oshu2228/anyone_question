// import Head from "next/head";
// import React, { useRef, useState } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Heading,
//   Input,
//   Stack,
//   Text,
// } from "@chakra-ui/react";
// import { LockIcon } from "@chakra-ui/icons";
// import Router, { useRouter } from "next/router";
// import { auth } from "../firebase";
// import { useAuthContext } from "../context/AuthContext";
// import Link from "next/link";
// const handler = (path) => {
//   Router.push(path);
// };

// const Login = () => {
//   const { user } = useAuthContext();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(email, password);
//     auth.signInWithEmailAndPassword(email, password);
//     router.push("/user");
//   };
//   const handleChangeEmail = (event) => {
//     setEmail(event.currentTarget.value);
//   };
//   const handleChangePassword = (event) => {
//     setPassword(event.currentTarget.value);
//   };

//   return (
//     <>
//       <Head>
//         <title>みんなの質問</title>
//         <meta name="description" content="Generated by create next app" />
//       </Head>

//       <Container
//         h="100vh"
//         minH="100%"
//         maxW="100%"
//         bg="#DDE3DE"
//         m="0"
//         padding="1rem"
//       >
//         <Heading pt="2" pb="2" pl="5" bg="#C5D8D1">
//           <Text>みんなの質問</Text>
//         </Heading>

//         <Container
//           minH="calc(100% - 64px)"
//           maxW="100%"
//           bg="#f1f5f9"
//           padding="5"
//         >
//           {/* <h1>ユーザ登録 {user.email}</h1> */}
//           <Flex align="center" justify="center" height="100vh">
//             <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
//               <Box textAlign="center">
//                 <LockIcon boxSize={8} />
//                 <Text fontWeight="bold" fontSize="24px">
//                   Log In
//                 </Text>
//               </Box>
//               <Stack spacing={6} py={4} px={10}>
//                 <Input
//                   name="email"
//                   type="email"
//                   placeholder="email"
//                   onChange={handleChangeEmail}
//                 />
//                 <Input
//                   name="password"
//                   type="password"
//                   placeholder="password"
//                   onChange={handleChangePassword}
//                 />
//                 <Button colorScheme="blue" onClick={handleSubmit}>
//                   ログイン
//                 </Button>
//               </Stack>
//             </Box>
//           </Flex>
//           <Box>
//             <Link href="/SignUp">
//               <a>ユーザー登録はこちらから</a>
//             </Link>
//           </Box>
//         </Container>
//       </Container>
//     </>
//   );
// };

// export default Login;
