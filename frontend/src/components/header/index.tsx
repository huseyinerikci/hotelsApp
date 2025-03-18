import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="border-b border-zinc-300">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-10">
          <h1 className="text-xl font-bold md:text-2xl">Tripster</h1>

          <nav className="flex gap-5 items-center">
            <Link to="/">Hotels</Link>
            <Link to="/" className="max-md:hidden">
              Popular
            </Link>
            <Link to="/create">Create</Link>
          </nav>
        </div>

        <div className="flex gap-5 items-center">
          <button className="border border-blue-500 rounded-full py-1 px-5 max-md:hidden">
            Signup
          </button>

          <button className="bg-blue-500 text-white rounded-full py-1 px-5 ">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
