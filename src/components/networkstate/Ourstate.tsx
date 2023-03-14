import type { FC } from "react";

const Ourstate: FC = () => {
  return (
    <div className="relative mb-20 flex w-full flex-col" id="state">
      <div className="flex h-full flex-col items-center justify-center ">
        <div
          className="clay mb-12 mt-12 text-center font-tt text-[4rem] leading-[1]"
          id="state_heading"
        >
          The Network State
          <br />
        </div>
        <div className="lh-spc lh-spc mb-12 ml-48 mr-48 text-left font-tt text-[1.5rem]">
          <p className="pt-6 text-[1.5rem]">
            The term “service provider” has become an synonym for exploitation 
            in our day and age. Centralized intermediaries in Web2
            <br /> continue to dish out unfair treatment to service providers in 
            the form of limited incentives & high participation fees. 
          </p>
          <p className="pt-6 text-[1.5rem]">
            We believe that the answer to all these problems lies in building a 
            digital network state as a bolder & global collaborative to end exploitation 
            of service providers. 
          </p>

          <h3 className="pt-3">
          We aim to change this by not only monetizing feedback as a service for our 
          citizens but also providing a template for other potential digital network states 
          to follow our example for other services.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Ourstate;
