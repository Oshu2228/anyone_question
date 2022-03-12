import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "../src/context/AuthContext";
import "../styles/globals.css";
import theme from "../theme/theme";

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
