// Next
import Link from "next/link";
// Types
import type { FC } from "react";

const Step2: FC = () => {
  return (
    <div
      className="relative flex h-screen w-full flex-col bg-[url('/images/puzzle.jpg')] bg-cover bg-no-repeat"
      id="step2"
    >
      <div className="mt-12 mb-12 flex h-full flex-col items-center justify-center">
        <div
          className="mb-12 mt-12 text-center font-tt text-[4rem] leading-[1]"
          id="step2_heading"
        >
          Step 2: Introduce yourself and
          <br />
          find your place to add value
          <br />
        </div>
        <div className="lh-spc lh-spc mb-12 ml-48 mr-48 text-left font-tt text-[1.5rem]">
          <h2 className="text-[1.5rem]">
            We encourage all new members to first introduce themselves
          </h2>
          <p className="pt-6 text-[1.5rem]">
            Start in the #introductions channel and spend some time to see how
            things work.
          </p>
          <ul className="list-disc">
            <li>
              Be respectful and bring positive energy to your interactions with
              other members
            </li>
            <li>
              Find places you can help the most based on your skillset
              <br />
            </li>
            <li>
              Ask a member if you need a helping hand to get started
              <br />
            </li>
          </ul>
        </div>
        <Link href="#step3" scroll={false}>
          <button className="group steps flex h-14 w-max items-center justify-center gap-x-2 rounded bg-white pl-8 pr-7 font-space text-lg font-medium text-black">
            Proceed to Step 3
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

export default Step2;
