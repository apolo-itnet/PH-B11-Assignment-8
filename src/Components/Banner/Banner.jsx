import React from "react";

const Banner = () => {
  return (
    <div className="px-2 lg:px-0">
      <div
        className="hero md:h-[500px] min-h-screen md:min-h-0 rounded-2xl"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/gMrQ1rqY/banner-img-1.png)",
            // "url(https://i.postimg.cc/bYLhTxnC/banner-img-1.png)",
        }}
      >
        <div className="hero-overlay rounded-2xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-3xl md:pt-60 pt-70">
            <h1 className="mb-5 text-4xl font-bold">Creating Strong Bonds Between Clients and Lawyers to Navigate Every Legal Challenge with Confidence. </h1>
            <p className="mb-5 text-sm">
            Our platform connects you with experienced professionals who are dedicated to providing comprehensive legal support and guidance to help you achieve the best possible outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
