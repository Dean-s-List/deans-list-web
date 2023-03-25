// Types
import type { FC } from "react";

const VideoDean: FC = () => {

  return (
    <div
      className="relative flex h-screen w-full flex-col bg-cover bg-no-repeat"
      id="wearedean"
    >
     <div className="mb-12 mt-12 flex h-full flex-col items-center justify-center">
        <video width="80%" height="500" playsInline controls
        >
          <source
            src="/videos/we_are_deanslist.mp4"
            type="video/mp4"
          />
        </video>
     </div>
    </div>
  );
};

export default VideoDean;
