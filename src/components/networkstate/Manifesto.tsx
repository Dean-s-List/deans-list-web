import type { FC } from "react";
import Link from 'next/link';

const Manifesto: FC = () => {
  return (
    <div className="relative flex w-full flex-col" id="manifest">
      <div className="flex h-full flex-col items-center justify-center">
      <div
          className="lh-spc mb-24">
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

export default Manifesto;
