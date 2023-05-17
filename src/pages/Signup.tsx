import * as React from "react";
import { Link } from "react-router-dom";
import phone from "../images/phone.png";

const Signup: React.FC = () => {
  return (
    <div className="flex-auto sm:w-56 md:w-2/3 lg:w-1/3 w-full max-w-2xl">
      <div className="md:flex w-full">
        <div className="flex justify-center">
          <img src={phone} className="h-full" alt="phone" />
        </div>
        <div>
          <p className="text-3xl text-white py-5 font-extrabold whitespace-break-spaces leading-10 mb-6">
            {"The money app for the\nwhole family"}
          </p>
          <p className="text-white text-base whitespace-break-spaces">
            {"Save easily. Spend smartly. Learn money.\nEarn money."}
          </p>
        </div>
      </div>
      <div className="flex">
        <Link
          className="block text-center my-5 text-white uppercase text-sm bg-transparent rounded-xl border p-5 w-1/2 font-bold mr-2"
          to="/login"
        >
          Log in
        </Link>
        <Link
          className="block text-center my-5 text-goalsetter-purple uppercase text-sm bg-white rounded-xl border p-5 w-1/2 font-bold ml-2"
          to=""
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Signup;
