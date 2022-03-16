import { Button } from "@chakra-ui/react";
import React from "react";
import { useBreakpointValue } from "@chakra-ui/react";

const UserButton = (props) => {
  const { onClick, colorScheme, text } = props;
  const buttonSize = useBreakpointValue(["sm", "sm", "md"]);
  return (
    <>
      <Button
        size={buttonSize}
        colorScheme={colorScheme}
        onClick={onClick}
        ml={1}
      >
        {text}
      </Button>
    </>
  );
};

export default UserButton;
