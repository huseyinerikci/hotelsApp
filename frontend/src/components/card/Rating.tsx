import { FC } from "react";
interface Props {
  rating: number;
  expanded?: boolean;
}
const Rating: FC<Props> = ({ rating, expanded = false }) => {
  const color =
    rating >= 4.7
      ? "bg-blue-500"
      : rating >= 4
      ? "bg-green-500"
      : rating >= 3
      ? "bg-yellow-500"
      : "bg-red-500";

  const ratingText =
    rating >= 4.7
      ? "Excellent"
      : rating >= 4
      ? "Good"
      : rating >= 3
      ? "Average"
      : "Bad";
  return (
    <div>
      <span className={`${color} text-white p-2 rounded-lg font-bold w-fit`}>
        {rating}
      </span>
      {expanded && (
        <span className="font-semibold text-lg ms-2 text-zinc-700">
          {ratingText}
        </span>
      )}
    </div>
  );
};

export default Rating;
