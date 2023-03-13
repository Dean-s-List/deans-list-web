import type { FC } from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Earned ($)"],
  ["Nigeria", 8184.54],
  ["Greece", 4657.38],
  ["Pakistan", 1721.17],
  ["Canda", 1859],
  ["USA", 1214.51],
  ["Germany", 533.35],
  ["Canada", 1859],
  ["Germany", 533.35],
  ["Guatemala", 22],
  ["Slovenia", 9],
  ["France", 322],
  ["Belgium", 83],
  ["India", 11],
  ["Vietnam", 22.1],
  ["UK", 5.51],
  ["Brazil", 1489],
  ["Australia", 235.46],
];

// const data = [
//     ["Country", "Popularity"],
//     ["Germany", 200],
//     ["United States", 300],
//     ["Brazil", 400],
//     ["Canada", 500],
//     ["France", 600],
//     ["RU", 700]
//   ];

export const options = {
  title: "Categories",
  colors: ["#14F195", "#6645FF", "#8845FF"],
  backgroundColor: "black",
};

const Country: FC = () => {
  return (
    <div className="mt-12 ml-20 flex h-full w-screen items-center">
      <Chart
        chartType="GeoChart"
        data={data}
        options={options}
        width={"100%"}
        height={"700px"}
      />
      <div className="relative flex h-screen  flex-col ">
        <div className="flex h-full flex-col items-center justify-center ">
          <div
            className="mb-12 mt-12 text-center font-tt text-4xl leading-[1]"
            id="step4_heading"
          >
            Earnings by Country
            <br />
          </div>
          <div className="lh-spc lh-spc mb-12 ml-48 mr-48 text-left font-tt text-[1.5rem]">
            <p className="pt-1 text-xl">
              Using a standard template for workshops will allow multiple
              workshops to happen across the globe.
            </p>

            <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
