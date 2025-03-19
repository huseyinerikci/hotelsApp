import { FC } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
interface Props {
  children: React.ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <div className="flex">
        <Link
          to="/"
          className="border border-zinc-200 rounded-md transition hover:border-zinc-100 p-2"
        >
          <FaArrowLeft />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Container;
