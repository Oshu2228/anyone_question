import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { postsState } from "../atoms/atom";
import { db } from "../base/firebase";

const UseEidtPost = () => {
  const [posts, setPosts] = useRecoilState(postsState);
  const router = useRouter();
  const toast = useToast();    

  const handleEditPost = (id, title, text) => {

    const foundPost = posts.findIndex((post) => post.id === id);
    if (title === "" || text === "") {
      return toast({
        title: "文字を入力してください",
        position: "top",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
    const replaceItemAtIndex = (posts, foundPost, newValue) => {
      return [
        ...posts.slice(0, foundPost),
        newValue,
        ...posts.slice(foundPost + 1),
      ];
    };
    setPosts(() => {
      return replaceItemAtIndex(posts, foundPost, {
        ...posts[foundPost],
        title: title,
        text: text,
      });
    });

    toast({
      title: "保存しました.",
      position: "top",
      status: "success",
      duration: 1000,
      isClosable: true,
    });

    db.collection("question").doc(id).set({
      title:title,
      text:text
    },{merge:true})

    router.push("/editPosts");
  };

  return {handleEditPost}
};

export default UseEidtPost;
