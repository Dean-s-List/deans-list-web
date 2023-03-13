import type { FC } from "react";

const Front: FC = () => {
  return (
    <div className="relative flex h-screen w-full flex-col bg-cover bg-no-repeat">
      <div className="mb-24 flex h-full flex-col items-center justify-center">
        <div
          className="mb-12 text-center font-tt text-[4rem] leading-[1]"
          id="hero_heading"
        >
          <img src="images/landingpage/Logo_Light.svg" alt="grizzlylogo" width={1100}/>
          The Network State <br /> Dean&apos;s List
        </div>
      </div>
    </div>
  );
};

export default Front;
