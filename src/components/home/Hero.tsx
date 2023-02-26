// Next
import Link from "next/link";
import Image from "next/image";
// Types
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="relative flex h-screen w-full flex-col bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat">
      <div className="flex h-full flex-col items-center justify-center">
        <div
          className="mb-24 text-center font-tt text-[7rem] leading-[1]"
          id="hero_heading"
        >
          Get key <br />
          Feedback from <br />
          web3 power users
        </div>
        <Link href="https://coinablepay.com/store/deans-list">
          <button className="group flex h-14 w-max items-center justify-center gap-x-2 rounded bg-white pl-8 pr-7 font-space text-lg font-medium text-black">
            Get Started
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
