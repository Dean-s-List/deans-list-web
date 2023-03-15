import type { FC } from "react";

const Politics: FC = () => {
  return (
    <div className="relative mb-40 flex w-full flex-col" id="governance">
    <div className="flex h-full flex-col items-center justify-center ">
      <div
        className="clay mb-12 mt-12 text-center font-tt text-[4rem] leading-[1]"
        id="governance_heading"
      >
        Our Governance & Treasury
        <br />
      </div>
      <div className="lh-spc lh-spc mb-12 ml-48 mr-48 text-left font-tt text-[1.5rem] w-full">
        <iframe className="rounded-lg" src="https://app.realms.today/dao/Dean's%20List" width="83%" height="800" id="govern"></iframe>
      </div>
    </div>
  </div>
  );
};

export default Politics;