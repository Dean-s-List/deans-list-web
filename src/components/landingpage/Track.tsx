import type { FC } from "react";

const Track: FC = () => {
  return (
    <div className="mb-20 grid w-full grid-cols-2 grid-rows-[300px_1fr_100px] items-center">
      <div
        className="col-span-2 text-center font-tt text-[4rem] leading-[1]"
        id="hero_heading"
      >
        Track
      </div>
      <div className="lh-spc lh-spc mb-12 ml-48 mr-48 text-left font-tt text-[1.5rem]">
        <p className="mb-10 pt-6 text-[1.5rem]">
          We pride ourselves as being the first “Service DAO'' on Solana. What
          started off as a Service DAO is now transforming into a network state.
        </p>

        <p className="pt-6 text-[1.5rem]">
          We are leveraging the power of governance protocols and DAO tooling on
          the Solana network in order to create layers of collaboration within a
          DAO structure. This allows us to plan, create and sell services to the
          wider Web3 ecosystem & beyond.{" "}
        </p>
      </div>
      <div className="justify-self-center">
        <img
          className=" "
          src="images/landingpage/DAOs.svg"
          alt="DAO logo"
          width={400}
        />
      </div>
    </div>
  );
};

export default Track;
