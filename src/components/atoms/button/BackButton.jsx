import React from "react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

const BackButton = (props) => {
  const { onClick } = props;
  const buttonSize = useBreakpointValue(["sm", "sm", "md"]);
  return (
    <>
      <Button
        size={buttonSize}
        background="#F4D1AE"
        _hover={{ opacity: "0.8" }}
        onClick={onClick}
      >
        {/* <ArrowLeftIcon mr="2" /> */}
        戻る
      </Button>
    </>
  );
};

export default BackButton;
