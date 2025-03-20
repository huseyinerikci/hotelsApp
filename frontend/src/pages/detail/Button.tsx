import { FC } from "react";
import { deletePlace } from "../../utils/service";
interface Props {
  id: number;
}

const Button: FC<Props> = ({ id }) => {
  const { mutate, isPending } = deletePlace();

  const handleDelete = () => {
    mutate(id);
  };

  return (
    <div className="flex justify-end my-5">
      <button
        onClick={handleDelete}
        disabled={isPending}
        className="bg-blue-500 text-white px-4 py-2 rounded-md transition hover:bg-blue-600   cursor-pointer"
      >
        Kaldır
      </button>
    </div>
  );
};

export default Button;
