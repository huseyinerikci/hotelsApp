import { FC } from "react";

interface Props {
  message: string;
  onRetry: () => void;
}
const Error: FC<Props> = ({ message, onRetry }) => {
  return (
    <div>
      <div className="mt-20 bg-blue-900 text-white rounded-lg p-4 font-semibold text-center">
        <h1 className="text-xl">Sorry, a problem occurred</h1>
        <p className="text-gray-500">{message}</p>

        <div className="flex justify-center mt-4">
          <button
            onClick={onRetry}
            className="border border-zinc-100 hover:bg-zinc-200 hover:text-blue-900 transition-all duration-300 px-4 py-2 rounded-lg cursor-pointer"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
