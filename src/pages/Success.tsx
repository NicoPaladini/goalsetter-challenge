import * as React from "react";

const Success: React.FC = () => {
  return (
    <div className="w-full max-w-md">
      <div className="my-10 bg-white shadow-2xl rounded-3xl p-10">
        <div className="pb-4">
          <p className="text-2xl py-5 font-extrabold whitespace-break-spaces mb-4">
            {"Thank you for choosing\nGoalsetter"}
          </p>
          <p className="text-base py-5 whitespace-break-spaces mb-10">
            {
              "At the moment, your account can only be used in\nthe app. Sorry for the inconvenience."
            }
          </p>
          <button
            disabled={true}
            className="bg-goalsetter-yellow-100 w-full py-3 text-white uppercase font-bold rounded-lg hover:cursor-pointer"
          >
            Download The App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
