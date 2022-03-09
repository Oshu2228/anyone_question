import { AddIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import  Router, { useRouter }  from "next/router";
import { useRef } from "react";
import { auth } from "../base/firebase";
const handler = (path) => {
  Router.push(path);
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const router = useRouter();
  const handleLogout = () => {
    auth.signOut();
    router.push("/");
  };
  
  return (
    <>
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
                  <Text>You</Text>
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
                    onClick={handleLogout}
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
    </>
  );
};

export default Header;
