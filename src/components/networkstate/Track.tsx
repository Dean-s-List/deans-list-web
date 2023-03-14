import type { FC } from "react";

const Track: FC = () => {
  return (
    <div className="mb-20 grid w-full grid-cols-2 grid-rows-[200px_1fr_100px] items-center" id="network">
      <div
        className="clay col-span-2 text-center font-tt text-[4rem] leading-[1]"
        id="network_heading"
      >
        DAO Track
      </div>
      <div className="nwrk lh-spc lh-spc mb-12 ml-48 mr-24 text-left font-tt text-[1.5rem]">
        <p className="pt-6 text-[1.5rem]">
        Dean&apos;s list DAO is building a Digital Network State with a vision to provide 
        prosperity &amp; opportunity to its citizens while building templates for the 
        future of decentralized work &amp; collaboration.
        </p>

        <p className="pt-6 text-[1.5rem]">
          We are leveraging the power of the Solana ecosystem to build the future 
          of work under a decentralized alternative that is fair, transparent, 
          autonomous & empowering.
        </p>
      </div>
      <div className="justify-self-center">
        <img
          className="imgrf"
          src="images/networkstate/DAOs.svg"
          alt="Solana DAOs"
          width={400}
        />
      </div>

    </div>
  );
};

export default Track;
