import { Link } from "react-router-dom";
import { LuArrowRight, LuBriefcaseBusiness } from "react-icons/lu";

const ServicesHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-15 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Metadata */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/15 bg-primary/5 text-primary font-medium">
            <LuBriefcaseBusiness className="size-5" />
            <span>Our Services</span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Digital Solutions
            <span className="text-primary"> Designed Around </span>
            Your Business
          </h1>

          {/* Supporting Copy */}
          <p className="mt-8 text-lg md:text-xl leading-8 text-black/70 max-w-3xl mx-auto">
            Every business faces different challenges, which is why we don't
            believe in one-size-fits-all solutions. Whether you're improving
            operations, strengthening your online presence, or building custom
            software, our services are designed to help your business move
            forward with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#services"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-primary
                px-8
                py-4
                text-black/70
                font-semibold
                transition-all
                duration-300
                hover:shadow-xl
                hover:scale-105
              "
            >
              Explore Our Services

              <LuArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-primary/20
                bg-white
                px-8
                py-4
                font-semibold
                text-primary
                transition-all
                duration-300
                hover:bg-primary/5
              "
            >
              Book a Consultation
            </Link>
          </div>

          {/* Bottom Statement */}
          <div className="mt-16 border-t border-slate-200 pt-8">
            <p className="text-base md:text-lg text-black/60 italic">
              "Technology is only valuable when it helps your business work
              smarter, serve customers better, and grow with confidence."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;