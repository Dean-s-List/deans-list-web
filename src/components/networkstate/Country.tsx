import type { FC } from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Earned ($)"],
  ["Nigeria", 8184.54],
  ["Greece", 4657.38],
  ["Pakistan", 1721.17],
  ["Canda", 1859],
  ["United States", 1214.51],
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
        <div className="lh-spc lh-spc mt-12 mb-12 ml-48 mr-48 text-left font-tt text-[1.5rem]">
          <Chart
          chartType="GeoChart"
          data={data}
          options={options}
          width={"99%"}
          height={"700px"}
          />
        </div>
      </div>
  </div>
  );
};

export default Country;
