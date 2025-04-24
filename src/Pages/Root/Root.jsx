import React, { useEffect } from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet, useLocation, useParams } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {

  const location = useLocation();
  const {name} = useParams();

  useEffect(() => {
    const lawyerUrlNames = (urlName) => {
      if (!urlName) return "";
      return urlName.replace(/-/g, " ") 
      .split(" ") 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }
    
    if (location.pathname === "/my-bookings") {
      document.title = "Booking"
    } else if (location.pathname.startsWith("/lawyerProfile")) {
      document.title = lawyerUrlNames(name) || "Lawyer Profile";
    } else if (location.pathname === "/blogs"){
      document.title = "Blogs";
    }
    else {
      document.title = "Law.BD";
    }
    
  }, [location, name] );

  return (
    <div className='md:max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;