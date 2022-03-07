import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { postsState } from "../atoms/atom";


const UseDeletePost = () => {
  const [posts, setPosts] = useRecoilState(postsState);
  const router = useRouter();
  const toast = useToast();

  const handleDeletePost = (id) => {
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
      router.push("/editPosts");
    }
  };
  return {handleDeletePost}
}

export default UseDeletePost