import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="hero bg-center bg-cover h-[20vh] md:h-[30vh] grid place-items-center rounded-3xl p-5">
      <div className="text-center text-white">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-5">
          Book accommodation with Tripster
        </h1>
        <p className="md:text-lg lg:text-xl">
          1,340,076 rooms around the world are waiting for you!
        </p>
      </div>
    </div>
  );
};

export default Hero;
