// Next
import Link from "next/link";
// Types
import type { FC } from "react";

const Step2: FC = () => {
  return (
    <div
      className="relative flex h-screen w-full flex-col bg-[url('/images/world.jpg')] bg-cover bg-no-repeat"
      id="step2"
    >
      <div className="mt-12 mb-12 flex h-full flex-col items-center justify-center">
        <div
          className="mb-12 mt-12 text-center font-tt text-[4rem] leading-[1]"
          id="step2_heading"
        >
           Get our help today 
          <br />
        </div>
        <div className="lh-spc lh-spc mb-12 ml-48 mr-48 text-left font-tt text-[1.5rem]">
        <p className="text-[1.5rem]">
        Drawing on our extensive experience in the field, we have optimized our service offerings into differet packages available in our <Link
                rel="noopener noreferrer"
                target="_blank"
                className="lun"
                href="https://coinablepay.com/@deanslist/ozWxnDy7G7B2Mxw2LLia72"
              >
                Coinable store</Link>. 
        </p>
        <p className="pt-6 text-[1.5rem]">
          Head over to our store to explore the service offerings and pick the one that will help the most.<br /><br /> 
          If you have questions, contact us via <Link href="mailto:support@deanslist.services" scroll={false}>e-mail
          </Link> and we will be happy to help. 
          </p>
        </div>
        <Link
                rel="noopener noreferrer"
                target="_blank"
                className="lun"
                href="https://coinablepay.com/@deanslist/ozWxnDy7G7B2Mxw2LLia72"
              ><button className="group steps flex h-14 w-max items-center justify-center gap-x-2 rounded bg-white pl-8 pr-7 font-space text-lg font-medium text-black">
            Visit the Coinable store
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
