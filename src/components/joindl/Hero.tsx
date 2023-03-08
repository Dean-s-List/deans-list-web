// Next
import Link from "next/link";
// Types
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="relative flex h-screen w-full flex-col bg-[url('/images/hands.jpg')] bg-cover bg-no-repeat">
      <div className="mb-24 flex h-full flex-col items-center justify-center">
        <div
          className="mb-12 text-center font-tt text-[4rem] leading-[1]"
          id="hero_heading"
        >
          Interested in joining
          <br />
          the Dean&apos;s List DAO?
        </div>
        <div className="lh-spc mb-12 ml-24 mr-24 text-left font-tt text-[2rem]">
          <p>
            We would be thrilled to have you join our community of power users
            who provide professional feedback on projects of all types.
          </p>
          <p>
            As a member of the Dean&apos;s List DAO, you&apos;ll have the
            opportunity to use your skills and expertise to help others improve
            their work, while also learning from other talented individuals.
          </p>
        </div>
        <Link href="#step1" scroll={false}>
          <button className="group flex h-14 w-max items-center justify-center gap-x-2 rounded bg-white pl-8 pr-7 font-space text-lg font-medium text-black">
            Become one of us today
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
