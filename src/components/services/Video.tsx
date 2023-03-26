// Types
import type { FC } from "react";
import { MediaOutlet, MediaPlayer } from '@vidstack/react';

const VideoDean: FC = () => {

  return (
    <div
      className="relative flex h-screen w-full flex-col bg-cover bg-no-repeat"
      id="wearedean"
    >
     <div className="mb-12 mt-12 flex h-full flex-col items-center justify-center">
      <MediaPlayer
       src="/videos/we_are_deanslist.mp4"
       poster="/images/we_are_building.png"
       controls
       >
       {/* ^ remove `controls` attribute if you're designing a custom UI */}
       <MediaOutlet />
      </MediaPlayer>
     </div>
    </div>
  );
};

export default VideoDean;
