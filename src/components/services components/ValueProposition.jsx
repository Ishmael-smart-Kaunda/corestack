import {
  LuBadgeCheck,
  LuHandshake,
  LuLightbulb,
  LuTrendingUp,
} from "react-icons/lu";

const values = [
  {
    icon: LuHandshake,
    title: "Business First",
    description:
      "Every engagement begins with understanding your business, your goals, and the challenges you're trying to solve—not with recommending software.",
  },
  {
    icon: LuLightbulb,
    title: "Practical Solutions",
    description:
      "We believe technology should simplify your work, not complicate it. Every solution we recommend is designed to create measurable value.",
  },
  {
    icon: LuBadgeCheck,
    title: "Implementation & Adoption",
    description:
      "Delivering a solution is only part of the journey. We work alongside you to ensure your team adopts it confidently and successfully.",
  },
  {
    icon: LuTrendingUp,
    title: "Long-Term Growth",
    description:
      "As your business grows, your technology should grow with it. We're committed to building relationships that extend well beyond project delivery.",
  },
];

const ValueProposition = () => {
  return (
    <section className="w-full px-5 md:px-15 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        <header className="max-w-3xl text-center mx-auto">
          <span className="uppercase tracking-widest text-primary font-semibold">
            More Than Service Delivery
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Technology is only one part of the solution.
          </h2>

          <p className="mt-6 text-lg text-black/70 leading-8">
            At CoreStack, we don't measure success by the number of websites,
            systems, or applications we build. We measure success by how much
            easier your business operates, how confidently your team works, and
            the value our solutions continue to create long after they're
            delivered.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <article
                key={index}
                className="flex gap-5 items-start"
              >
                <div className="w-14 h-14 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="text-primary size-6" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-black/70 leading-7">
                    {value.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ValueProposition;