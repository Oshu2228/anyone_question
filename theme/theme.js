import {  extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        // background: "#E5E5E5",
        minHeight: "100vh",
      },
    },
  },
  fonts: {
    body: `"Roboto", ${base.fonts?.body}`,
  },
});

export default theme;
