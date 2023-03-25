/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
// Next
import Head from "next/head";
// React
import { useEffect, useState } from "react";
// Components
import Hero from "@/components/services/Hero";
import Step1 from "@/components/services/Step1";
import Step2 from "@/components/services/Step2";
import VideoDean from "@/components/services/Video";
import Footer from "@/components/home/Footer";
// import Spinner from "@/components/spinner/Spinner";
// Types
import type { NextPage } from "next";

const Services: NextPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);
  return (
    <>
      <Head>
        <title>Services and Packages | Dean&apos;s List</title>

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
          content="Discover the services that Dean's List offers its clients to make them better."
        />
        <meta
          property="og:description"
          content="Discover the services that Dean's List offers its clients to make them better."
        />
        <meta property="og:title" content="Dean's List - Services" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@deanslistDAO" />
        <meta name="twitter:title" content="Dean's List - Services" />
        <meta name="twitter:image" content="/images/logo.png" />
        <meta name="twitter:site" content="@deanslistDAO" />
        <meta
          name="twitter:description"
          content="Discover the services that Dean's List offers its clients to make them better."
        />
      </Head>

      <div className="text-white">
        {loading ? (
          <></>
        ) : (
          <>
            <Hero />
            <VideoDean />
            <Step1 />
            <Step2 />
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Services;
