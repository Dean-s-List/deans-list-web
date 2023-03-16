import type { FC } from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Earned ($)"],
  ["Greece", 9276.3],
  ["Nigeria", 8993.29],
  ["Pakistan", 2435.36],
  ["Canada", 3757.2],
  ["United States", 1519.55],
  ["Germany", 1033.35],
  ["Guatemala", 22],
  ["Slovenia", 9],
  ["France", 999],
  ["Belgium", 401],
  ["India", 386],
  ["Vietnam", 47.1],
  ["United Kingdom", 5.51],
  ["Brazil", 1519],
  ["Australia", 235.46],
  ["Indonesia", 200],
  ["Lebanon", 0],
  ["Sierra Leone", 0],
  ["Japan", 0],
  ["Argentina", 0],
  ["Portugal", 100],
];

export const options = {
  title: "Earnings by Country",
  colors: ["#14F195", "#6645FF", "#8845FF"],
  backgroundColor: "black",
};

const Country: FC = () => {
  return (
  <div className="relative mb-20 flex w-full flex-col" id="earn">
      <div className="flex h-full flex-col items-center justify-center ">
        <div
          className="clay mb-12 mt-12 text-center font-tt text-[4rem] leading-[1]"
          id="earn_heading"
        >
          Earnings by Country
          <br />
        </div>
        <div className="lh-spc lh-spc mt-12 mb-12 ml-48 mr-48 text-left font-tt text-[1.5rem]" id="earn_chart">
          <Chart
          chartType="GeoChart"
          data={data}
          options={options}
          width={"100%"}
          height={"800px"}
          />
        </div>
      </div>
  </div>
  );
};

export default Country;
