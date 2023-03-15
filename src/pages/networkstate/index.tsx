// Next
import Head from "next/head";
// React
import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
// Pages
import Front from "@/components/networkstate/Front";
import Track from "@/components/networkstate/Track";
import Country from "@/components/networkstate/Country";
import OurData from "@/components/networkstate/OurData";
import Ourstate from "@/components/networkstate/Ourstate";
import Opportunities from "@/components/networkstate/Opportunities";
import Politics from "@/components/networkstate/Politics";
import Footer from "@/components/home/Footer";

const Networkstate: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [data] = useState([25, 50, 35, 15, 94, 10]);

  const svgRef = useRef(null);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);

  return (
    <>
      <Head>
        <title>Network State on Solana | Dean&apos;s List</title>

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
          content="network state, solana network state, solana power users, better feedback solutions"
        />
        <meta name="author" content="Dean's List DAO" />
        <meta
          name="description"
          content="Learn about the Dean's List Network State on Solana. A DAO for Web3 power users."
        />
        <meta
          property="og:description"
          content="Learn about the Dean's List Network State on Solana. A DAO for Web3 power users."
        />
        <meta property="og:title" content="Dean's List - Network State on Solana" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="/networkstate" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@deanslistDAO" />
        <meta name="twitter:title" content="Dean's List - Network State on Solana" />
        <meta name="twitter:image" content="/images/logo.png" />
        <meta name="twitter:site" content="@deanslistDAO" />
        <meta
          name="twitter:description"
          content="Learn about the Dean's List Network State on Solana. A DAO for Web3 power users."
        />
      </Head>
      <div className="text-white">
        {loading ? (
          <></>
        ) : (
          <>
            <Front />
            <Track />
            <Ourstate />
            <OurData />
            <Country />
            <Politics/>
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Networkstate;
