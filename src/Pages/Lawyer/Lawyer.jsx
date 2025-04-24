import React from "react";
import { PiTrademarkRegistered } from "react-icons/pi";
import { Link } from "react-router";

const Lawyer = ({ singleLawyer, urlLawyerName }) => {
  const { image, availability, experience, name, speciality, license } =
    singleLawyer;

  const today = new Date().toLocaleString("en-US", {weekday: "long"});
  const isAvailableToday = availability.includes(today)

  return (

    <div className="md:p-6 p-3">
        <div className="card card-side flex flex-col gap-4 md:gap-0 md:flex-row bg-base-100 shadow-xs md:p-4 p-2 border border-gray-200 items-center">
          <div>
            <figure className="w-full" >
              <img className="md:w-50 rounded-2xl" src={image} alt="Movie" />
            </figure>
          </div>
          <div className="card-body w-full ">
            <div className="flex justify-start gap-4">
              <p className="bg-green-200 py-1 rounded-full font-semibold text-xs text-center">
                {isAvailableToday ? "Available" : "Unavailable"}
              </p>
              <p className="bg-blue-200 py-1 rounded-full font-semibold text-xs text-center">
                {experience} <span>Years Experience</span>{" "}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="card-title text-xl font-bold ">{name}</h2>
              <p className="font-semibold text-gray-600">{speciality}</p>
              <p className="flex gap-2 items-center">
                <PiTrademarkRegistered className="text-xl font-bold" /> License
                No: {license}
              </p>
            </div>

            <Link to={`/lawyerProfile/${urlLawyerName}`} className=" btn btn-primary rounded-full shadow-none border border-green-500 text-green-500 font-semibold bg-white hover:bg-green-600 hover:text-white duration-300 ease-in-out transition-colors">
            View Details
            </Link>
          </div>
        </div>
    </div>

  );
};

export default Lawyer;
