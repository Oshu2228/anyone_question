import { Button } from "@chakra-ui/react";
import React from "react";

const EditButton = (props) => {
  const { onClick } = props

  return (
    <>
      <Button
        colorScheme="green"
        ml="auto"
        mr={2}
        onClick={onClick}
      >
        編集
      </Button>
    </>
  );
};

export default EditButton;
