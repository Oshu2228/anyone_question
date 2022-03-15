import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import Router from "next/router";
import React from "react";

const BackButton = (props) => {
  const {onClick} = props;
  return (
    <>
     <Box display="flex" justifyContent="flex-end" >
      <Button
        background="#F4D1AE"
        _hover={{ opacity: "0.8" }}
        onClick={onClick}
        mr="8px"
      >
        <ArrowLeftIcon mr="2" />
        戻る
      </Button>
      </Box>
    </>
  );
};

export default BackButton;
