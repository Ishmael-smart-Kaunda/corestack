import { Link } from "react-router-dom";
import { LuArrowRight, LuMessageCircleMore } from "react-icons/lu";

const ServicesCTA = () => {
  return (
    <section className="w-full px-5 md:px-15 py-24">
      <div
        className="
          max-w-[1180px]
          mx-auto
          bg-gradient-to-br
          from-[#03045e]
          to-[#023e8a]
          rounded-3xl
          px-8
          md:px-16
          py-16
          text-center
          shadow-xl
        "
      >
        <div className="w-fit mx-auto p-4 rounded-full bg-white/10 border border-white/15">
          <LuMessageCircleMore className="size-9 text-white" />
        </div>

        <h2 className="mt-8 text-3xl md:text-5xl font-bold text-white">
          Not Sure Which Service You Need?
        </h2>

        <p className="max-w-3xl mx-auto mt-8 text-lg leading-8 text-white/85">
          That's completely okay. Most businesses don't come to us looking for
          a specific service—they come with a challenge they're trying to solve.
          Together, we'll understand your business, identify the opportunities,
          and recommend the solution that's right for you.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              bg-white
              text-[#03045e]
              px-8
              py-4
              rounded-full
              font-semibold
              hover:scale-105
              transition-all
              duration-300
              group
            "
          >
            Let's Talk

            <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/about"
            className="
              inline-flex
              items-center
              justify-center
              px-8
              py-4
              rounded-full
              border
              border-white/25
              text-white
              font-semibold
              hover:bg-white/10
              transition-all
              duration-300
            "
          >
            Learn More About CoreStack
          </Link>

        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;