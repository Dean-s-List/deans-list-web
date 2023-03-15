import type { FC } from "react";
import Link from 'next/link';

const Front: FC = () => {
  return (
    <div className="relative flex h-screen w-full flex-col bg-cover bg-no-repeat">
      <div className="mb-24 flex h-full flex-col items-center justify-center">
        <div
          className="mb-12 text-center font-tt text-[4rem] leading-[1]"
          id="hero_heading"
        >
          <img
            src="images/networkstate/Logo_Light.svg"
            alt="Grizzlython Solana"
            width={1100}
          />
          The Network State <br /> Dean&apos;s List
        </div>
        <div
          className="mb-24 text-center">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                className="lun"
                href="/files/Deanlist_Declaration_Network_State.pdf"
              >
          <img
            src="images/networkstate/deans-list-declaration.png"
            alt="Dean's List Network State Declaration"
            width={1100}
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Front;
