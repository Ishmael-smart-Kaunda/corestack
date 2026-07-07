import promises from "../../data/promises";
import PromiseCard from "./PromiseCard";
import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";

const Promise = () => {
  return (
    <section className="w-full px-5 md:px-15 py-20 bg-gray-100/50">
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center">
        <span className="text-primary font-semibold uppercase tracking-wider">
          Our Promise
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          The Principles That Guide Every Partnership
        </h2>

        <p className="mt-6 text-lg lg:text-xl text-black/70 leading-relaxed">
          We believe successful digital transformation isn't about installing
          software it's about understanding people, improving processes, and
          building solutions that create lasting value. These principles guide
          every conversation, every recommendation, and every solution we
          deliver.
        </p>
      </header>

      {/* Promise Cards */}
      <div
        className="
          max-w-6xl
          mx-auto
          mt-16
          grid
          md:grid-cols-2
          gap-8
        "
      >
        {promises.map((promise, index) => (
          <div
            key={promise.id}
            className={index % 2 !== 0 ? "md:translate-y-12" : ""}
          >
            <PromiseCard {...promise} />
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto text-center mt-24">
        <div className="w-24 h-px bg-gray-300 mx-auto mb-8" />

        <h3 className="text-2xl md:text-3xl font-bold leading-tight">
          Technology alone doesn't transform businesses.
          <br />
          People do.
        </h3>

        <p className="mt-6 text-lg text-black/70 leading-relaxed">
          Our role is to make technology feel approachable, practical, and
          valuable. When people, processes, and technology work together,
          meaningful growth naturally follows.
        </p>

        <Link
          to="/contact"
          className="
            inline-flex
            items-center
            gap-2
            mt-10
            px-7
            py-4
            rounded-full
            bg-primary
            text-black/70
            font-semibold
            hover:shadow-xl
            hover:scale-105
            transition-all
            duration-300
            group
          "
        >
          Let's Build Something Together

          <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </footer>
    </section>
  );
};

export default Promise;