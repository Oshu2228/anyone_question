import { CheckIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import React from "react";

const SaveButton = (props) => {

  const { onClick } = props;
  console.log(onClick);
  return (
    <>
      <Button
        colorScheme="blue"
        color="#FFFFFF"
        mr="28px"
        type="submit"
        onClick={onClick}
      >
        <CheckIcon mr="2" />
        保存
      </Button>
    </>
  );
};

export default SaveButton;
