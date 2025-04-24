import React from "react";
import { useNavigate } from "react-router";
import errorImage from "../../assets/404.svg";
import Navbar from "../../Components/Header/Navbar";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="lg:max-w-7xl mx-auto my-3">
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center">
        <img className=" lg:w-3/12" src={errorImage} alt="" />
        <div className="py-6 mx-auto text-center">
          <h1 className="text-3xl font-semibold">Oops! Page not found</h1>
          <p className="py-4 px-4">
            The page you are trying to access does not exist or has been moved.{" "}
            Try going back to our homepage.
          </p>
          <button
            onClick={() => navigate("/")}
            className="btn btn-primary rounded-full bg-green-600 border-none shadow-none text-white  "
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
