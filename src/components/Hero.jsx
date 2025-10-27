import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero flex items-center justify-center min-h-[90vh] bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container relative z-10 text-center px-6 md:px-12">
        <div className="hero-content scroll-reveal">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 animate-glow">
            Discover Your{" "}
            <span className="text-[#d4af37]">Dream Property</span>
          </h1>

          <p
            className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Experience{" "}
            <span className="text-[#d4af37]">
              premium real estate services
            </span>{" "}
            with futuristic solutions and unparalleled expertise. <br />
            Where <span className="italic">luxury meets innovation</span> in
            property investment.
          </p>

          <div
            className="flex flex-col md:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              to="/properties"
              className="btn-primary premium-hover animate-float px-8 py-3 bg-[#d4af37] text-white rounded-full text-lg font-semibold hover:bg-[#b89630] transition-all duration-300 shadow-lg"
            >
              🏠 Explore Premium Properties
            </Link>

            <Link
              to="/consultation"
              className="btn-secondary premium-hover px-8 py-3 border border-[#d4af37] text-[#d4af37] rounded-full text-lg font-semibold hover:bg-[#d4af37] hover:text-white transition-all duration-300"
            >
              💼 Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
