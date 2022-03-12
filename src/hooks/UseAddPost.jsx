import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { postsState } from "../atoms/atom";
import { db, pushQuestion } from "../base/firebase";
import firebase from "firebase";
import "firebase/firestore";

const UseAddPost = () => {
  const [posts, setPosts] = useRecoilState(postsState);
  const router = useRouter();
  const toast = useToast();

  const newQuestion = (addName, addTitle, addText) => {
    if (addName === "" || addTitle === "" || addText === "") {
      return toast({
        title: "空欄の項目があります",
        position: "top",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    } else {

      db.collection("question").add({
        name: addName,
        title: addTitle,
        text: addText,
        createDate:firebase.firestore.FieldValue.serverTimestamp(),
        comment:[]
      });

      router.push("/user");
    }
  };

  return { newQuestion };
};

export default UseAddPost;
