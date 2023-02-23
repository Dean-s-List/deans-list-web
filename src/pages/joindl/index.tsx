/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
// Next
import Head from "next/head";
// Components
import Hero from "@/components/joindl/Hero";
import Step1 from "@/components/joindl/Step1";
import Step2 from "@/components/joindl/Step2";
import Step3 from "@/components/joindl/Step3";
import Step4 from "@/components/joindl/Step4";
import Footer from "@/components/home/Footer";
// Types
import type { NextPage } from "next";

const Joindl: NextPage = () => {
  return (
    <>
      <Head>
        <title>Become One of Us | Dean&apos;s List</title>

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta name="theme-color" content="dark" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="keywords"
          content="web3 feedback, solana power users, crypto project feedback, help with crypto project, better feedback solutions"
        />
        <meta name="author" content="Dean's List DAO" />
        <meta
          name="description"
          content="Learn how to join a Service DAO for Web3 power users making every project we touch better."
        />
        <meta
          property="og:description"
          content="Learn how to join a Service DAO for Web3 power users making every project we touch better."
        />
        <meta property="og:title" content="Dean's List - Become One of Us" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@deanslistDAO" />
        <meta name="twitter:title" content="Dean's List - Become One of Us" />
        <meta name="twitter:image" content="/images/logo.png" />
        <meta name="twitter:site" content="@deanslistDAO" />
        <meta
          name="twitter:description"
          content="Learn how to join a Service DAO for Web3 power users making every project we touch better."
        />
      </Head>

      <div className="text-white">
        <Hero />
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
        <Footer />
      </div>
    </>
  );
};

export default Joindl;
