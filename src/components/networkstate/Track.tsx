import type { FC } from "react";

const Track: FC = () => {
  return (
    <div className="mb-20 grid w-full grid-cols-2 grid-rows-[300px_1fr_100px] items-center" id="network">
      <div
        className="clay col-span-2 text-center font-tt text-[4rem] leading-[1]"
        id="network_heading"
      >
        Track
      </div>
      <div className="lh-spc lh-spc mb-12 ml-48 text-left font-tt text-[1.5rem]">
        <p className="mb-10 text-[1.5rem]">
        Dean&apos;s list DAO is building a Digital Network State with a vision to provide 
        prosperity &amp; opportunity to its citizens while building templates for the 
        future of decentralized work &amp; collaboration.
        </p>

        <p className="pt-6 text-[1.5rem]">
          We are leveraging the power of governance protocols and DAO tooling on
          the Solana network in order to create layers of collaboration within a
          DAO structure. This allows us to plan, create and sell services to the
          wider Web3 ecosystem & beyond.
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
