import type { FC } from "react";

const Politics: FC = () => {
  return (
    <div className="relative mb-40 flex w-full flex-col" id="state">
    <div className="flex h-full flex-col items-center justify-center ">
      <div
        className="clay mb-12 mt-12 text-center font-tt text-[4rem] leading-[1]"
        id="state_heading"
      >
        Our Governance & Treasury
        <br />
      </div>
      <div className="lh-spc lh-spc mb-12 ml-48 mr-48 text-left font-tt text-[1.5rem] w-full">
        <iframe className="ml-48 mr-20 rounded-2xl" src="https://app.realms.today/dao/Dean's%20List" width="83%" height="800"></iframe>
      </div>
    </div>
  </div>
  );
};

export default Politics;