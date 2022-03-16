import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function UserCard(props) {
  const { name, title, text, detailClick, answerClick } = props;
  return (
    <>
      <Center py={6}>
        <Box
          maxW={"360px"}
          minH={"360px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={8}
          textAlign={"center"}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {name}
          </Heading>
          <Text
            fontWeight="bold"
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
            py={3}
          >
            {title}
          </Text>
          <Text
            minH={44}
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {text}
          </Text>

          <Stack direction={"row"} spacing={4}>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
              onClick={detailClick}
            >
              回答一覧
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
              onClick={answerClick}
            >
              回答する
            </Button>
          </Stack>
        </Box>
      </Center>
    </>
  );
}
