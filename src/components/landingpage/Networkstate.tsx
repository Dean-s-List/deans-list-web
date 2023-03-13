import type { FC } from "react";

const Networkstate: FC = () => {
  return (
    <div className="relative mb-20 flex w-full flex-col" id="step4">
      <div className="flex h-full flex-col items-center justify-center ">
        <div
          className="mb-12 mt-12 text-center font-tt text-[4rem] leading-[1]"
          id="step4_heading"
        >
          The Network State
          <br />
        </div>
        <div className="lh-spc lh-spc mb-12 ml-48 mr-48 text-left font-tt text-[1.5rem]">
          <h2 className="text-[1.5rem]">
            Feedback sessions are the flagship service of the DAO and are
            marketed to other projects across the Web 3 ecosystem.
          </h2>
          <p className="pt-6 text-[1.5rem]">
          The term “service provider” has become an acronym for exploitation in our day and age. Centralized intermediaries in Web2<br />  continue to dish out unfair treatment to service providers in the form of limited incentives & high participation fees. Divided & conquered, the colonization continues. 
          </p>
          <ul className="list-disc">
            <li>
              Make sure to be constructive and professional in your feedback
            </li>
            <li>
              Seek to add value and offer specific suggestions for improvement
            </li>
          </ul>
          <h3 className="pt-3">
            We look forward to your contributions in improving the Web3
            Ecosystem, one feedback at a time.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Networkstate;
