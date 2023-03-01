// Types
import type { FC } from "react";

const Step4: FC = () => {
  return (
    <div
      className="relative flex h-screen w-full flex-col bg-[url('/images/high5.jpg')] bg-cover bg-no-repeat"
      id="step4"
    >
      <div className="flex h-full flex-col items-center justify-center ">
        <div
          className="mb-12 mt-12 text-center font-tt text-[4rem] leading-[1]"
          id="step4_heading"
        >
          Step 4: Jump In, Provide
          <br />
          Feedback and Get Paid
          <br />
        </div>
        <div className="lh-spc lh-spc mb-12 ml-48 mr-48 text-left font-tt text-[1.5rem]">
          <h2 className="text-[1.5rem]">
            Feedback sessions are the flagship service of the DAO and are
            marketed to other projects across the Web 3 ecosystem.
          </h2>
          <p className="text-[1.5rem] pt-6">
            As a member of the DAO, you will have the opportunity to review
            projects and provide feedback.
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

export default Step4;
