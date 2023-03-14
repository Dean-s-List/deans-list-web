// Next
import Link from "next/link";
// Types
import type { FC } from "react";

const Step1: FC = () => {
  return (
    <div
      className="relative flex h-screen w-full flex-col bg-[url('/images/idea.jpg')] bg-cover bg-no-repeat"
      id="step1"
    >
      <div className="mb-12 mt-12 flex h-full flex-col items-center justify-center">
        <div
          className="mb-12 mt-12 text-center font-tt text-[4rem] leading-[1]"
          id="step1_heading"
        >
          Step 1: Join Our Discord <br />
        </div>
        <div className="lh-spc mb-12 ml-48 mr-48 text-left font-tt text-[1.5rem]">
          <h2 className="text-[1.5rem]">
            The Dean&apos;s List DAO operates and communicates with Discord.
          </h2>
          <p className="pt-6 text-[1.5rem]">
            To join our Discord server, pick from one of the three options
            below:
          </p>
          <ul className="list-disc">
            <li>
              Purchase one of our NFTs on the {" "}
              <Link
                rel="noopener noreferrer"
                target="_blank"
                className="lun"
                href="https://www.tensor.trade/trade/deanslist"
              >
                secondary market
              </Link> or try your luck at one of our auctions.
            </li>
            <li>
              Purchase at least one $DEAN Token by swapping $GRAPE on{" "}
              <Link
                rel="noopener noreferrer"
                target="_blank"
                className="lun"
                href="https://app.strataprotocol.com/swap/6LyW1iUpfTPiMxSLMpKCxeAqXDz7nuWCfCNnEaSmibZ1"
              >
                Strata
              </Link>
            </li>
            <li>
              Become a customer by purchasing one of our packages through the{" "}
              <Link
                rel="noopener noreferrer"
                target="_blank"
                className="lun"
                href="https://coinablepay.com/store/deans-list"
              >
                Coinable store
              </Link>
            </li>
          </ul>
        </div>
        <Link href="#step2" scroll={false}>
          <button className="group steps flex h-14 w-max items-center justify-center gap-x-2 rounded bg-white pl-8 pr-7 font-space text-lg font-medium text-black">
            Proceed to Step 2
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
