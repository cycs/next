import { FC } from "react";

export const Hero: FC = () => {
  console.log("hero");

  return (
    <main className="h-screen pt-20 px-12 relative">
      <div className="font-urbanist text-9xl">
        BEST IN THE <br />
        WORLD
      </div>
      <div className="font-urbanist text-8xl absolute bottom-12 right-0">
        CHRIS HAYEN
      </div>
    </main>
  );
};
