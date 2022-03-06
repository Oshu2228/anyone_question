import { AddIcon } from '@chakra-ui/icons'
import { Box, Button } from '@chakra-ui/react'
import  Router from 'next/router';
import React from 'react'

const AddButton = () => {
  const handler = (path) => {
    Router.push(path);
  };
  return (
    <>
      <Box pt="10" mr="5" textAlign="right">
        <Button
          background="#F4D1AE"
          _hover={{ opacity: "0.8" }}
          onClick={() => handler("/posting")}
        >
          <AddIcon mr="2" />
          新規投稿
        </Button>
      </Box>
    </>
  )
}

export default AddButton