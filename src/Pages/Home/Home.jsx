import React, { useEffect, useRef, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Lawyers from "../Lawyers/Lawyers";
import { useLoaderData } from "react-router";
import CountUp from "react-countup";
import cardPic1 from "../../assets/success-doctor.png";
import cardPic2 from "../../assets/success-review.png";
import cardPic3 from "../../assets/success-patients.png";
import cardPic4 from "../../assets/success-staffs.png";

const Home = () => {
  const lawyersData = useLoaderData();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <Banner></Banner>
      <Lawyers lawyersData={lawyersData}></Lawyers>
      <div className="pt-8 py-6" ref={sectionRef}>
        <div className="flex flex-col text-center gap-3 py-4">
          <h1 className="text-3xl font-bold">We Provide Best Law Services</h1>
          <p>
            Our team of experienced lawyers is dedicated to helping you navigate
            the legal system.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 ">
          {/* card-1 */}
          <div className="p-8 bg-gray-100 border-gray-200 shadow-lg rounded-2xl flex flex-col gap-2 justify-start">
            <img className="w-14" src={cardPic1} alt="" />
            <h1 className="text-4xl font-bold">
              <CountUp
                start={0}
                end={isVisible ? 199 : 0}
                duration={2}
                enableReinitialize={true}
                suffix="+"
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </h1>
            <p>Total Lawyer</p>
          </div>
          {/* card-2 */}
          <div className="p-8 bg-gray-100 border-gray-200 shadow-lg rounded-2xl flex flex-col gap-2 justify-start">
            <img className="w-14" src={cardPic2} alt="" />
            <h1 className="text-4xl font-bold">
              <CountUp
                start={0}
                end={isVisible ? 467 : 0}
                duration={2}
                enableReinitialize={true}
                suffix="+"
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </h1>
            <p>Total Reviews</p>
          </div>
          {/* card-3 */}
          <div className="p-8 bg-gray-100 border-gray-200 shadow-lg rounded-2xl flex flex-col gap-2 justify-start">
            <img className="w-14" src={cardPic3} alt="" />
            <h1 className="text-4xl font-bold">
              <CountUp
                start={0}
                end={isVisible ? 1900 : 0}
                duration={2}
                enableReinitialize={true}
                suffix="+"
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </h1>
            <p>Cases Initiated </p>
          </div>
          {/* card-4 */}
          <div className="p-8 bg-gray-100 border-gray-200 shadow-lg rounded-2xl flex flex-col gap-2 justify-start">
            <img className="w-14" src={cardPic4} alt="" />
            <h1 className="text-4xl font-bold">
              <CountUp
                start={0}
                end={isVisible ? 300 : 0}
                duration={2}
                enableReinitialize={true}
                suffix="+"
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </h1>
            <p>Total Stuffs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
