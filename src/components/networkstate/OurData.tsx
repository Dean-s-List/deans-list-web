// Types
import type { FC } from "react";

const OurData: FC = () => {
  const data = {
    revenue: 41461,
    population: 69,
    total_payouts: 27850.56,
    members: 39
  };

  return (
    <div className="relative mb-20 flex w-full flex-col" id="ourdata">
      <div className="datawrap ml-48 mr-48 sm:flex sm:space-x-4">
        <div className="mb-4 inline-block w-full transform overflow-hidden rounded-lg bgclay text-left align-bottom shadow transition-all sm:my-8 sm:w-1/3">
          <div className="bg-gray-5 p-5">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 className="font-medium leading-6 text-gray-800">
                  Total GDP
                </h3>
                <p className="text-3xl font-bold text-black">${data.revenue}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 inline-block w-full transform overflow-hidden rounded-lg bgclay text-left align-bottom shadow transition-all sm:my-8 sm:w-1/3">
          <div className="bg-gray p-5">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 className="font-medium leading-6 text-gray-800">
                  Population
                </h3>
                <p className="text-3xl font-bold text-black">
                  {data.population}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 inline-block w-full transform overflow-hidden rounded-lg bgclay text-left align-bottom shadow transition-all sm:my-8 sm:w-1/3">
          <div className="bg-gray p-5">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 className="font-medium leading-6 text-gray-800">
                  GDP per capita
                </h3>
                <p className="text-3xl font-bold text-black">
                  ${Math.round((data.revenue / data.population) * 100) / 100}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="datawrap ml-48 mr-48 sm:flex sm:space-x-4">
        <div className="mb-4 inline-block w-full transform overflow-hidden rounded-lg bgclay text-left align-bottom shadow transition-all sm:my-8 sm:w-1/3">
          <div className="bg-gray-5 p-5">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 className="font-medium leading-6 text-gray-800">
                  Total Payouts
                </h3>
                <p className="text-3xl font-bold text-black">${Math.round(data.total_payouts)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 inline-block w-full transform overflow-hidden rounded-lg bgclay text-left align-bottom shadow transition-all sm:my-8 sm:w-1/3">
          <div className="bg-gray p-5">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 className="font-medium leading-6 text-gray-800">
                  Active citizens
                </h3>
                <p className="text-3xl font-bold text-black">
                  {data.members}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 inline-block w-full transform overflow-hidden rounded-lg bgclay text-left align-bottom shadow transition-all sm:my-8 sm:w-1/3">
          <div className="bg-gray p-5">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 className="font-medium leading-6 text-gray-800">
                  Avg. per active citizen
                </h3>
                <p className="text-3xl font-bold text-black">
                  ${Math.round((data.total_payouts / data.members) * 100) / 100}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




  );
};

export default OurData;
