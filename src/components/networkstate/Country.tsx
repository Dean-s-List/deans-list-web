import type { FC } from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Earned ($)"],
  ["Greece", 11672.28],
  ["Nigeria", 10875.77],
  ["Pakistan", 3331.03],
  ["Canada", 4215.73],
  ["United States", 1604.43],
  ["Germany", 582.85],
  ["Guatemala", 21.72],
  ["Slovenia", 9.38],
  ["France", 1732.15],
  ["Belgium", 589.39],
  ["India", 386.14],
  ["Vietnam", 47.1],
  ["United Kingdom", 35.51],
  ["Brazil", 1488.56],
  ["Australia", 500],
  ["Indonesia", 110.04],
  ["Lebanon", 0],
  ["Sierra Leone", 0],
  ["Japan", 0],
  ["Argentina", 0],
  ["Portugal", 0],
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
