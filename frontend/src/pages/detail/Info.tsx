import { FC } from "react";
import { Place } from "../../types";
import Rating from "../../components/card/Rating";

interface Props {
  place: Place;
}

const Info: FC<Props> = ({ place }) => {
  return (
    <div className="flex justify-between items-center my-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold">{place.name}</h1>
        <p className="text-zinc-600">{place.description}</p>
      </div>
      <div>
        <Rating rating={place.rating} expanded />
      </div>
    </div>
  );
};

export default Info;
