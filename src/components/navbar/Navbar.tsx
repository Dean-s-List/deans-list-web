// Next
import Link from "next/link";
import Image from "next/image";
// Types
import type { FC } from "react";

export const NavBar: FC = () => {
  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar fixed z-[999] flex h-[67.5px] flex-row border-white bg-black text-[21px] text-neutral-content shadow-lg md:pb-2">
        <div className="z-2 navbar-start flex">
          <div className="flex content-center">
            <Link href="/">
              <Image
                src="/images/logo-dl.svg"
                alt="DEAN'S LIST"
                className="h-40 w-40"
                height={160}
                width={160}
              />
            </Link>
          </div>
        </div>

        {/* Nav Links */}
        <div className="z-[999] hidden md:inline md:navbar-center">
          <div className="z-[999] flex items-stretch"></div>
        </div>

        {/* Wallet & Settings */}
        <div className="navbar-end">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn-ghost btn-square btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link
            href="https://coinablepay.com/store/deans-list"
            target={"_blank"}
            rel="noreferrer"
            className="hidden md:flex"
          >
            <div className="btn-ghost rounded-btn btn-md btn">SERVICES</div>
          </Link>
          <Link href="/joindl" className="hidden lg:flex">
            <button className="btn-ghost rounded-btn btn-md btn">
              JOIN US
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
