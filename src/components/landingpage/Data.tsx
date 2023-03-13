// Types
import type { FC } from "react";

const Step4: FC = () => {

    const data = {
        revenue: 41411,
        population: 68
    }

  return (
<div className="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
    <div className="sm:flex sm:space-x-4">
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-gray-5 p-5">
                <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 className="text-sm leading-6 font-medium text-gray-500">Total Revenue</h3>
                        <p className="text-3xl font-bold text-black">${data.revenue}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-gray- p-5">
                <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 className="text-sm leading-6 font-medium text-gray-600">Population</h3>
                        <p className="text-3xl font-bold text-black">{data.population}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white p-5">
                <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 className="text-sm leading-6 font-medium text-gray-600">GDP per capita</h3>
                        <p className="text-3xl font-bold text-black">${Math.round((data.revenue / data.population)*100)/100}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Step4;
