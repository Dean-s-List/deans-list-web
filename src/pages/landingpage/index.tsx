// Next
import Head from "next/head";
// React
import { useEffect, useRef, useState } from "react";

import {PowerBIEmbed} from 'powerbi-client-react';
import {models} from 'powerbi-client';

import type { NextPage } from "next";

import Front from "@/components/landingpage/Front";
import Track from "@/components/landingpage/Track";
import Country from "@/components/landingpage/Country";
import Data from "@/components/landingpage/Data";
import Networkstate from "@/components/landingpage/Networkstate";

import Footer from "@/components/home/Footer";
import { toast } from "react-hot-toast";

const Landingpage: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [data] = useState([25,50,35,15,94,10]);
  
  const svgRef = useRef(null);
  useEffect(() => {
    //setting up svg



    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);


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
        {loading ? (
          <></>
        ) : (
          <>
          <Front/>
          <Track/>
          <Networkstate/>
          <Data/>
          <Country/>
          <Footer/>
          </>
        )}
      </div>
    </>
  );
};

export default Landingpage;