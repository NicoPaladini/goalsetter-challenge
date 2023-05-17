import * as React from "react";
import { Outlet } from "react-router-dom";
import backgroundLight from "../images/backgroundLight.png";
import Header from "../components/Header";

const AuthLayout: React.FC = () => {
  return (
    <div className="flex-col items-center">
      <Header />
      <main
        className="container min-w-full min-h-screen mx-auto flex justify-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${backgroundLight})` }}
      >
        <div className="container mx-auto mt-20 md:mt-40 p-5 flex justify-center">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
