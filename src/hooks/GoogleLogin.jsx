import { useRouter } from "next/router";
import { useState } from "react";
import { auth, provider } from "../base/firebase";


const GoogleLogin = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const handleGoogleLogin = async () => {
    
    try {
      await auth.signInWithPopup(provider);
      router.push("/user");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return { handleGoogleLogin };
};

export default GoogleLogin;
