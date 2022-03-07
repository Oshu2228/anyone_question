import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { postsState } from "../atoms/atom";
import { db } from "../base/firebase";

const UseDeletePost = () => {
  const [posts, setPosts] = useRecoilState(postsState);
  const router = useRouter();
  const toast = useToast();

  const handleDeletePost = (id, props) => {
    const result = window.confirm("本当に削除してもよろしいですか?");
    if (result) {
      const foundPost = posts.findIndex((post) => post.id === id);
      const deletePost = [...posts];
      deletePost.splice(foundPost, 1);
      setPosts(deletePost);

      toast({
        title: "削除しました.",
        position: "top",
        status: "error",
        duration: 1000,
        isClosable: true,
      });

      db.collection("question").doc(props.id).delete();
      
      router.push("/editPosts");
    }
  };

  return { handleDeletePost };
};

export default UseDeletePost;
