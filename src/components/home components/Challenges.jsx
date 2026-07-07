import { LuArrowRight } from "react-icons/lu";
import challenges from "../../data/challenges";
import Challengescard from "./challengesCard";

const Challenges = () => {
  return (
    <section className="w-full px-5 md:px-15 py-20 bg-gray-100/50">
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          The Challenges Holding Your Business Back
        </h2>

        <p className="text-lg lg:text-xl text-black/70 leading-relaxed">
          Every growing business reaches a point where manual processes,
          disconnected tools, and outdated systems begin to slow progress. We
          work with businesses to identify these challenges and implement
          practical digital solutions that improve efficiency, customer
          experience, and sustainable growth.
        </p>
      </header>

      {/* Challenge Cards */}
      <div
        className="
          w-full
          max-w-[1180px]
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
          mt-16
        "
      >
        {challenges.map((challenge) => (
          <Challengescard
            key={challenge.id}
            {...challenge}
          />
        ))}
      </div>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto mt-20 text-center">
        <div className="w-24 h-[1px] bg-gray-300 mx-auto mb-8" />

        <h3 className="text-2xl md:text-3xl font-bold">
          Every challenge is an opportunity to grow.
        </h3>

        <p className="mt-5 text-lg text-black/70 leading-relaxed">
          Behind every inefficiency is an opportunity to work smarter. At
          CoreStack, we believe the right technology should simplify your
          operations, strengthen your customer relationships, and support the
          way your business naturally works—not force you to adapt to it.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="#how-we-work"
            className="
              group
              inline-flex
              items-center
              gap-2
              px-7
              py-3.5
              rounded-full
              bg-primary
              text-black/70
              font-semibold
              transition-all
              duration-300
              hover:shadow-lg
              hover:scale-105
            "
          >
            See How We Work

            <LuArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Challenges;