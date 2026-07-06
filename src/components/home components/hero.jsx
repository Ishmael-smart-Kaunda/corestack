import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import hero1 from '../../assets/images/hero/hero1.jpg';
import hero2 from '../../assets/images/hero/hero2.jpg';
import hero3 from '../../assets/images/hero/hero3.jpg';

const slides = [hero1, hero2, hero3];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Images */}
      {slides.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt="CoreStack Solutions"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#03045e]/95 via-[#03045e]/70 to-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">

        <div className="max-w-screen-lg mx-auto w-full px-6 pt-32 pb-24 md:pt-40 md:pb-32">

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-300/30 backdrop-blur-md text-blue-200 uppercase tracking-[2px] text-sm font-medium">
            Empowering Businesses Through Technology
          </span>

          <h1 className="mt-8 max-w-3xl text-white text-5xl md:text-7xl font-bold leading-tight">
            Smart Digital Solutions That Help Businesses Grow.
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-200 leading-8">
            CoreStack Solutions partners with ambitious businesses to build
            modern websites, automate business processes, develop custom
            software, and create scalable digital platforms that improve
            efficiency and accelerate growth.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              to="/contact"
              className="px-8 py-4 rounded-md bg-white text-[#03045e] font-semibold hover:bg-gray-100 transition"
            >
              Start Your Project
            </Link>

            <Link
              to="/services"
              className="px-8 py-4 rounded-md border border-white/40 text-white backdrop-blur-md hover:bg-white hover:text-[#03045e] transition"
            >
              Explore Services
            </Link>

          </div>

        </div>

      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? "w-10 h-3 bg-white"
                : "w-3 h-3 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;