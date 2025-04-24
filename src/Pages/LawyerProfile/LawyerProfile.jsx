import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { PiTrademarkRegistered } from "react-icons/pi";
import { RiErrorWarningLine } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import noDataImage from "../../assets/no-data.svg";

const LawyerProfile = () => {
  const { license } = useParams();
  const data = useLoaderData();
  const navigate = useNavigate();

  const lawyerDetails = data.find(
    (lawyer) => lawyer.license.toUpperCase() === license.toUpperCase()
  );
  

  if (!lawyerDetails) {
    return (
      <div className="mx-auto text-center flex flex-col justify-center items-center">
        <img className="lg:w-6/12 w-full" src={noDataImage} alt="" />
        <p className="text-2xl font-black">Lawyer not found!</p>
        <p className="text-base font-semibold py-3">
          No lawyer information was found at this URL.
        </p>
        <p className="text-lg font-semibold">"Please provide a valid URL."</p>
      </div>
    );
  }

  const {
    image,
    availability,
    experience,
    name: lawyerName,
    speciality,
    license: lawyerLicense,
    fee,
  } = lawyerDetails;

  const today = new Date().toLocaleString("en-US", { weekday: "long" });
  const isAvailableToday = availability.includes(today);

  const handleBooking = () => {
    if (!isAvailableToday) {
      toast.error("Lawyer is not available today!");
      return;
    }

    let existingBookings = [];
    try {
      const storedBookings = localStorage.getItem("bookings");
      if (storedBookings) {
        existingBookings = JSON.parse(storedBookings);
        if (!Array.isArray(existingBookings)) {
          existingBookings = [];
        }
      }
    } catch (error) {
      console.error("Error parsing bookings from localStorage:", error);
      existingBookings = [];
    }

    const isAlreadyBooked = existingBookings.some(
      (booking) => booking.name === lawyerName
    );
    if (isAlreadyBooked) {
      toast.error("You already booked this lawyer!");
      return;
    }

    const bookingData = {
      lawyerId: lawyerDetails.id,
      name: lawyerName,
      speciality: speciality,
      fee: fee,
      bookingDate: new Date().toISOString(),
    };

    existingBookings.push(bookingData);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    navigate("/my-bookings", { state: { bookedLawyer: lawyerName } });

    // toast.success(`Booking Successful for ${lawyerName}!`, {
    //   position: "top-right",
    // });
    // setTimeout(() => navigate("/my-bookings"), 300);
  };

  return (
    <div>
      {/* Profile Details */}
      <div className="md:p-20 p-4 py-10 md:-py-0 bg-gray-200 rounded-2xl">
        <h1 className="text-4xl font-bold text-center pb-4">
          Lawyer’s Profile Details
        </h1>
        <p className="lg:w-5xl text-center mx-auto">
          Welcome to the <span className="font-semibold"> {lawyerName}</span>{" "}
          profile of our esteemed lawyer. Here you can find all the necessary
          details regarding their expertise and services. Here you can learn
          more about their qualifications, experience, and how they can assist
          you with your legal needs.
        </p>
      </div>

      {/* Lawyer Profile JSON Data Load */}
      <div className="card card-side bg-base-100 shadow-sm p-6 border border-gray-200 items-center my-6 flex flex-col md:flex-row gap-4 md:gap-0 ">
        <div>
          <figure>
            <img className="w-70 rounded-2xl" src={image} alt="Movie" />
          </figure>
        </div>
        <div className="pl-4 py-0">
          <div>
            <p className="bg-blue-200 p-2 rounded-full font-semibold text-xs text-center inline-block ">
              {experience} <span>Years Experience</span>{" "}
            </p>
          </div>

          <div className="flex flex-col gap-1 pt-4">
            <h2 className="card-title text-2xl font-bold ">{lawyerName}</h2>
            <div className="flex justify-start items-center gap-4 py-4">
              <p className="font-semibold text-gray-600">{speciality}</p>
              <p className="flex gap-2">
                <PiTrademarkRegistered className="text-xl font-bold" /> License
                No: {lawyerLicense}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-4 pb-5">
            <h3 className="text-md font-semibold ">Availability</h3>
            <div className="flex gap-2">
              {availability.map((day, index) => (
                <span
                  key={index}
                  className="bg-amber-300/40 text-amber-500 py-1 px-3 rounded-full font-semibold text-sm text-center"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold flex gap-4">
              {" "}
              Consultation Fee:{" "}
              <span className="text-green-600 ">
                {" "}
                <small className="text-base">Taka :</small> {fee}{" "}
              </span>{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Appointment */}
      <div className="p-6 bg-base-100 shadow-sm rounded-2xl border border-gray-200 items-center mb-4 ">
        <h1 className="text-center text-3xl font-bold py-4 border-b border-dashed">
          Book an Appointment
        </h1>
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          <p className="font-semibold">Availability</p>
          <p
            className={`rounded-full border-none p-2 px-4 font-semibold ${
              isAvailableToday
                ? "bg-green-100 text-green-600"
                : "bg-red-600 border-none text-white"
            } `}
          >
            {isAvailableToday
              ? "Lawyer Available Today"
              : "Lawyer Not Available Today"}
          </p>
        </div>
        <div className="py-6 lg:w-6xl flex justify-start">
          <p className="p-2 px-4 text-base text-center bg-amber-200/50 text-amber-500 rounded-full flex items-start lg:items-center justify-start lg:gap-3">
            <RiErrorWarningLine className="lg:text-xl md:text-2xl text-6xl" />
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </p>
        </div>
        <div className="flex justify-center w-full">
          <button
            onClick={handleBooking}
            className={`btn btn-primary rounded-full border-green-500 shadow-none text-white w-full ${
              isAvailableToday
                ? "bg-green-600 hover:bg-white hover:text-black hover:border-green-500"
                : "bg-red-600 border-red-600 "
            }`}
          >
            Book Appointment Now
          </button>
        </div>
      </div>
      <div className="py-4 mb-16 flex justify-center">
        <button
          onClick={() => navigate("/")}
          className="btn btn-primary rounded-full bg-white text-black border-green-500 hover:bg-green-600 hover:text-white shadow-none"
        >
          Back to Lawyer Section
        </button>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default LawyerProfile;
