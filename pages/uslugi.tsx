import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Content from "../components/Content";
import Header from "../components/Header";
import TopBar from "../components/TopBar";

const Home: NextPage = () => {
  return (
    <div className='relative'>
      <Head>
        <title>Uslugi</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TopBar />
      <Header />
      <h1 className='mt-80'>Usługi</h1>
    </div>
  );
};

export default Home;
