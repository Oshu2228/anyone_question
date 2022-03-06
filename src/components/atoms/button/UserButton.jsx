import { Button } from "@chakra-ui/react";
import React from "react";

const UserButton = (props) => {
  const {onClick,colorScheme,text} = props
  return (
    <>
      <Button
        ml="auto"
        mr={8}
        colorScheme={colorScheme}
        onClick={onClick}
      >
       {text}
      </Button>
    </>
  );
};

export default UserButton;
