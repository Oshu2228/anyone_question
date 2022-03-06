import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import Router from "next/router";
import React from "react";
const handler = (path) => {
  Router.push(path);
};

const BackButton = (props) => {
  const {onClick} = props;
  return (
    <>
      <Button
        background="#F4D1AE"
        _hover={{ opacity: "0.8" }}
        onClick={onClick}
        mr="8px"
      >
        <ArrowLeftIcon mr="2" />
        戻る
      </Button>
    </>
  );
};

export default BackButton;
