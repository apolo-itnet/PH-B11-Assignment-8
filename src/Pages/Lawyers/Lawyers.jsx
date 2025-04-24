import React, { Suspense, useState } from "react";
import Lawyer from "../Lawyer/Lawyer";

const Lawyers = ({ lawyersData }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedLawyers = showAll ? lawyersData : lawyersData.slice(0, 6);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const getUrlFriendlyName = (license) => {
    return license.toUpperCase().replace(/\s+/g, "-");
  };

  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold text-center py-2">Our Best Lawyers</h1>
      <p className="lg:w-5xl p-3 py-4 text-center mx-auto">
        Our experienced and dedicated lawyers are committed to providing
        strategic, client-focused legal solutions. Each member brings unmatched
        expertise to ensure your rights are always protected.
      </p>
      <p className="text-center font-bold text-md">
        Meet Our Team of Expert Legal Minds
      </p>

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-ring loading-xl text-green-600"></span>
          </div>
        }
      >
        <div className="our-lawyer grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {displayedLawyers.map((sLawyer) => (
            <Lawyer 
            key={sLawyer.id} 
            singleLawyer={sLawyer}
            urlFriendlyName={getUrlFriendlyName(sLawyer.license)}
            ></Lawyer>
          ))}
        </div>
        <div className="text-center mt-4">
          <button
            onClick={toggleShowAll}
            className="btn btn-primary rounded-full bg-green-600 hover:bg-green-700 border-none shadow-none text-white"
          >
            {showAll ? "Show Less" : "Show All Lawyer"}
          </button>
        </div>
      </Suspense>
    </div>
  );
};

export default Lawyers;
