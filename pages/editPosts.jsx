// 編集一覧画面
import { Container } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../src/components/Header";
import styles from "../styles/Container.module.css"
import EditList from "../src/components/EditList";

const useList = () => {
  return (
    <>
      <Head>
        <title>edTalk</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Container className={styles.mainContainer}>
        <Header titleName={"edtalk 編集画面"}/>
        <Container className={styles.subContainer} bg="#028090">
          <EditList />
        </Container>
      </Container>
    </>
  );
};

export default useList;
