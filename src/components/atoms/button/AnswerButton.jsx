import { Button } from "@chakra-ui/react";
import React from "react";

const AnswerButton = (props) => {
  const {onClick} = props
  return (
    <>
      <Button
        colorScheme="cyan"
        color="#FFFFFF"
        mr={2}
        onClick={onClick}
      >
        回答
      </Button>
    </>
  );
};

export default AnswerButton;
