import type { FC } from "react";

const Opportunities: FC = () => {
  return (
    <div className="mt-10 flex flex-wrap justify-center">
      <div className="max-w-md p-4">
        <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8">
          <div className="mb-3 flex items-center">
            <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </div>
            <h2 className="text-lg font-medium text-black">Become a Nomad</h2>
          </div>
          <div className="flex flex-grow flex-col justify-between">
            <p className="text-base leading-relaxed text-black">
              Interested in becoming one of us? The Dean's List DAO operates
              primarily through our Discord server. At present, there are only
              two ways to enter our paradise.
            </p>
            <a
              href="/joindl"
              className="mt-3 inline-flex items-center font-bold text-black hover:text-blue-600"
            >
              Join Us Now
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-md p-4">
        <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8">
          <div className="mb-3 flex items-center">
            <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-black">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-lg font-medium text-black">
              Start a Network State
            </h2>
          </div>
          <div className="flex flex-grow flex-col justify-between">
            <p className="text-base leading-relaxed text-black">
              Explore DAO creation, gather feedback, and analyze reviews to
              implement decentralized governance, fostering collaboration,
              transparent decision-making, and community-driven innovation in
              the Network State.
            </p>
            <a
              href="https://github.com/Deans-List/networkstate"
              className="mt-3 inline-flex items-center font-bold text-black hover:text-blue-600"
            >
              Start Now
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-md p-4">
        <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8">
          <div className="mb-3 flex items-center">
            <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-medium text-black">
              Products & Services
            </h2>
          </div>
          <div className="flex flex-grow flex-col justify-between">
            <p className="text-base leading-relaxed text-black">
              We are leveraging the power of governance protocols and DAO
              tooling on the Solana network in order to create layers of
              collaboration within a DAO structure.
            </p>
            <a
              href="https://coinablepay.com/store/deans-list"
              className="mt-3 inline-flex items-center font-bold text-black  hover:text-blue-600"
            >
              Buy Now
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
