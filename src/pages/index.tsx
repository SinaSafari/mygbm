import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import { Center, Heading, Stack } from "@chakra-ui/react";
import { BlankLayout } from "layouts";
import Image from "next/image";
import Lottie from "react-lottie";
import animationData from "../../public/assets/lottie/donate.json";
import Head from "next/head";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title> قهوت با من</title>
      </Head>
      <div className="coming-soon">
        <div className="coming-soon-header">
          <div className="coming-soon-header__logo">
            <Image src="/assets/images/icon.png" layout="fill" />
          </div>
          <Heading as="h4" size="md">
            قهوت با من
          </Heading>
        </div>
        <div className="coming-soon-content">
          <Stack spacing={6} px={5}>
            <Heading as="h4" size="lg">
              حمایت طرفدارن خود را با چند کلیک داشته باشید😉
            </Heading>
            <Heading as="h4" size="md">
              به زودی کنار شمایم . . .
            </Heading>
            <Lottie options={defaultOptions} height={250} width={250} />
          </Stack>
        </div>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};

export default Home;
