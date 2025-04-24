import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router";

const MyBookings = () => {
  
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    try {
      const storedBookings = localStorage.getItem("bookings");
      if (storedBookings) {
        const parsedBookings = JSON.parse(storedBookings);
        if (Array.isArray(parsedBookings)) {
          setBookings(parsedBookings);
        } else {
          setBookings([]);
        }
      }
    } catch (error) {
      console.error("Error fetching bookings from localStorage:", error);
      setBookings([]);
    }
    
  }, []);

  useEffect( () => {
    const bookedLawyer = location.state?.bookedLawyer;
    if(bookedLawyer){
      toast.success(`Booking Success for ${bookedLawyer}!`, {
        position: 'top-right',
      });
      // navigate(location.pathname, {replace: true, state:{} });
      window.history.replaceState({}, document.title, location.pathname)
    }
  },[]);

  const today = new Date().toISOString().split("T")[0];
  const todayBookings = bookings.filter(
    (booking) => booking.bookingDate.split("T")[0] === today
  );

  const handleCancel = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
    toast.error("Booking Cancelled!")};

  const chartData = bookings.map((booking) => ({
    name: booking.name,
    fee: booking.fee,
  }));

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
     Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height, index } = props;
    const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#ff4d4f"];
    const dynamicFill = colors[index % colors.length];

    return (
      <path d={getPath(x, y, width, height)} stroke="none" fill={dynamicFill} />
    );
  };

  return (
    <div className="p-6">
      {/* Recharts */}
      {bookings.length === 0 ? (
        <p className="text-center text-gray-600 text-2xl font-bold py-6">
          No bookings found
        </p>
      ) : (
        <div className="mx-auto flex justify-center items-center border border-gray-200 rounded-2xl md:p-6 p-2">
          <BarChart
            width={window.innerWidth - 60}
            height={400}
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ResponsiveContainer />
            <Bar dataKey="fee" shape={<TriangleBar />}>
              <LabelList dataKey="fee" position="top"></LabelList>
            </Bar>
          </BarChart>
        </div>
      )}

      {/* Today’s Appointments */}
      {todayBookings.length > 0 && (
        <div className="py-8">
          <h1 className="text-3xl font-bold text-center py-4">
            My Today’s Appointments
          </h1>
          <p className="text-center">
            Our platform connects you with verified, experienced Lawyers across
            various specialties — all at your convenience.
          </p>
        </div>
      )}
      {todayBookings.length === 0 ? (
        <p className="text-center text-gray-600 text-2xl font-bold">
          No appointments today
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {todayBookings.map((booking, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-sm p-4 border border-gray-200"
            >
              <div className="card-body">
                <div className="flex flex-col md:flex-row md:justify-between justify-center items-center border-b border-gray-400 border-dashed pb-3">
                  <div className="flex flex-col text-center md:text-left  gap-1 py-4 md:py-0">
                    <h2 className="card-title text-xl font-bold">
                      {booking.name}
                    </h2>
                    <p className="text-base  font-semibold text-gray-600">
                      {booking.speciality}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-base font-semibold">
                      Consultation Fee:{" "}
                      <span className="">৳ {booking.fee} Taka</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-actions w-full justify-center">
                <button
                  onClick={() => handleCancel(index)}
                  className="btn btn-error rounded-full bg-red-600 hover:bg-red-500 border-none text-white w-full"
                >
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="py-4 flex justify-center">
        {bookings.length > 0 ? (
          <button
            onClick={() => navigate("/")}
            className="btn btn-primary rounded-full bg-green-600 hover:bg-green-700 border-none shadow-none text-white"
          >
            Another Appointment Booking
          </button>
        ) : (
          <button
            onClick={() => navigate("/")}
            className="btn btn-primary rounded-full bg-green-600 hover:bg-green-700 border-none shadow-none text-white"
          >
            Booking Lawyers
          </button>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default MyBookings;
