// Next
import Link from "next/link";
// Types
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="relative flex h-screen w-full flex-col bg-[url('/images/hero2.jpg')] bg-cover bg-no-repeat">
      <div className="mb-24 flex h-full flex-col items-center justify-center">
        <div
          className="mb-12 text-center font-tt text-[4rem] leading-[1]"
          id="hero_heading"
        >
          Interested in getting
          <br />
          the Dean&apos;s List help?<br/>
        </div>
        <div className="lh-spc mt-2 mb-12 ml-24 mr-24 text-left font-tt text-[2rem]">
          <p>
          The Dean&apos;s List DAO leverages the power of its citizens to offer a wide range of services to help your project improve.
          </p>
          <p>
          If you&apos;re looking to get better, grow better and strategize better, we can help. 
          </p>
        </div>
        <Link href="#wearedean" scroll={false}>
          <button className="group flex h-14 w-max items-center justify-center gap-x-2 rounded bg-white pl-8 pr-7 font-space text-lg font-medium text-black">
            Learn more
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

export default Hero;
