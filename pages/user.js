import { Container } from "@chakra-ui/react";
import Head from "next/head";
import QuestionList from "../src/components/QuestionList";
import Header from "../src/components/Header";
import styles from "../styles/Container.module.css"

const user = () => {
  return (
    <>
      <Head>
        <title>みんなの質問</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Container className={styles.mainContainer}>
        <Header />
        <Container minH="calc(100% - 64px)" maxW="100%" bg="white" padding="5">
          <QuestionList />
        </Container>
      </Container>
    </>
  );
};

export default user;
