import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { postsState } from "../atoms/atom";
import { db, pushQuestion } from "../base/firebase";

const UseAddPost = () => {
  const [posts, setPosts] = useRecoilState(postsState);
  const router = useRouter();
  const toast = useToast();

  const addId = posts[posts.length - 1].id + 1;

  const today = () => {
    const year = new Date().getFullYear() + "-";
    const month = new Date().getMonth() * 1 + 1 + "-";
    const date = new Date().getDate();
    return year + month + date;
  };


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
      setPosts([
        ...posts,
        {
          id: addId,
          name: addName,
          title: addTitle,
          text: addText,
          createDate: today(),
        },
      ]);

      db.collection("question").add({
        name: addName,
        title: addTitle,
        text: addText,
        createDate: new Date(),
      });

      router.push("/user");
    }
  };

  return { newQuestion };
};

export default UseAddPost;
