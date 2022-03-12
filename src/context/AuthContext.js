import { createContext, useState, useContext, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { postsState } from "../atoms/atom";
import { auth, db } from "../base/firebase";
const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const setPosts = useSetRecoilState(postsState) 
  const [user, setUser] = useState("");
  const value = {
    user,
  };

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => {
      unsubscribed();
    };

  }, []);

  useEffect(() => {
    const unSub = db.collection("question").onSnapshot((snapshot) => {
      
      setPosts([
        ...snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          name: doc.data().name,
          text: doc.data().text,
          comment: doc.data().comment,
          // 日時表示実装中
          // createDate: doc.data().createDate.toDate(),
        })),
      ]);
    });
    return () => unSub();
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
