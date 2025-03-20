import { FC } from "react";
import { Place } from "../../types";

interface Props {
  place: Place;
}

const Overview: FC<Props> = ({ place }) => {
  return (
    <div>
      <div className="flex gap-6 text-zinc-500 border-b border-zinc-300">
        <span className="cursor-pointer text-blue-500">Genel</span>
        <span className="cursor-pointer">Odalar</span>
        <span className="cursor-pointer">Özellikler</span>
        <span className="cursor-pointer">Kurallar</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mt-5">
        <div>
          <h1 className="text-xl font-semibold mb-2">Özellikler</h1>
          <div className="grid grid-cols-2 gap-5">
            {place.amenities.map((i) => (
              <span
                key={i}
                className="border border-gray-300 rounded-md p-2 line-clamp-1"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
        <iframe
          src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBsIeyT619QHjkdSUcn_A0c1Bqy0X8yn8s&q=${place.location}`}
          className="w-full h-full rounded-md lg:max-h-[250px]"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Overview;
