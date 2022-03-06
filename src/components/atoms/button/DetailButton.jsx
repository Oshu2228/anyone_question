import { Button } from "@chakra-ui/react";
import React from "react";

const DetailButton = (props) => {
  const {onClick} = props
  return (
    <>
      <Button
        colorScheme="green"
        ml="auto"
        mr={2}
        onClick={onClick}
      >
        詳細
      </Button>
    </>
  );
};

export default DetailButton;
