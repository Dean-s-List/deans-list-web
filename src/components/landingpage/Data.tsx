// Types
import type { FC } from "react";

const Step4: FC = () => {
  const data = {
    revenue: 41411,
    population: 68,
  };

  return (
    <div className="mx-4 max-w-full py-6 sm:mx-auto sm:px-6 lg:px-8">
      <div className="sm:flex sm:space-x-4">
        <div className="mb-4 inline-block w-full transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow transition-all sm:my-8 sm:w-1/3">
          <div className="bg-gray-5 p-5">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 className="text-sm font-medium leading-6 text-gray-500">
                  Total Revenue
                </h3>
                <p className="text-3xl font-bold text-black">${data.revenue}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 inline-block w-full transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow transition-all sm:my-8 sm:w-1/3">
          <div className="bg-gray- p-5">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 className="text-sm font-medium leading-6 text-gray-600">
                  Population
                </h3>
                <p className="text-3xl font-bold text-black">
                  {data.population}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 inline-block w-full transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow transition-all sm:my-8 sm:w-1/3">
          <div className="bg-white p-5">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 className="text-sm font-medium leading-6 text-gray-600">
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
    </div>
  );
};

export default Step4;
