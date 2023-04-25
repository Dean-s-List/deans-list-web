// Next
import Link from "next/link";
// Types
import type { FC } from "react";

const Step1: FC = () => {
  return (
    <div
      className="relative flex h-screen w-full flex-col bg-[url('/images/hands-key.jpg')] bg-cover bg-no-repeat"
      id="step1"
    >
      <div className="mb-12 mt-12 flex h-full flex-col items-center justify-center">
        <div
          className="mb-12 mt-12 text-center font-tt text-[4rem] leading-[1]"
          id="step1_heading"
        >
          Our Service Verticals <br />
        </div>
        <div className="lh-spc mb-12 ml-48 mr-48 text-left font-tt text-[1.5rem]">
          <h2 className="text-[1.5rem]">
            We have 3 service verticals that are a unique amalgamation of our collective skills sets all geared towards making you better.
          </h2>
          <ul className="list-disc">
            <li>
            <strong>Get Better</strong> with our signature <Link 
            href="https://coinablepay.com/@deanslist" scroll={false}
            >feedback
            </Link> service. It provides in-depth analysis on how you can enhance user experience, weed out inefficiencies & galvanize your community. 
            </li>
            <li>
            <strong>Grow Better</strong> from our exclusive AMAs & gameplay review, search engine optimisation & promotion. We have your marketing, visibility & outreach goals covered. 
            </li>
            <li>
            <strong>Strategize Better</strong> with our sage advice. We answer the questions and help you find the best solutions to drive your project forward.  
            </li>
          </ul>
        </div>
        <Link href="#step2" scroll={false}>
          <button className="group steps flex h-14 w-max items-center justify-center gap-x-2 rounded bg-white pl-8 pr-7 font-space text-lg font-medium text-black">
            Get better today
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-7 w-7 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Step1;
