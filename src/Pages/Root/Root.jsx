import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useParams, useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const Root = () => {
  const location = useLocation();
  const { license } = useParams();
  const data = useLoaderData();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const lawyerDetails = data?.find(
      (lawyer) => lawyer?.license.toLowerCase() === license?.toLowerCase()
    );
    const lawyerName = lawyerDetails?.name || "Lawyer Profile";

    document.title = 
        location.pathname === "/my-bookings"
      ? "Booking"
      : location.pathname.startsWith("/lawyer/")
      ? lawyerName 
      : location.pathname === "/blogs"
      ? "Blogs"
      : "Law.BD"; 
  }, [location.pathname, license, data]);

  return (
    <div className="md:max-w-7xl mx-auto">
      <Navbar></Navbar>
      {isLoading ? <LoadingSpinner></LoadingSpinner> : <Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default Root;