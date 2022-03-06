import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import theme from "../theme/theme";
import { AuthProvider } from "./context/AuthContext";


function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <AuthProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      </AuthProvider>
    </RecoilRoot>
  );
}

export default MyApp;
