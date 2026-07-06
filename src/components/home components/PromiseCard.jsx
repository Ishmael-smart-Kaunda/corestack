const PromiseCard = ({ label, icon, title, description }) => {
  const Icon = icon;

  return (
    <article
      className="
        group
        relative
        w-full
        bg-white
        border
        border-[#03045e]/10
        rounded-md
        shadow-sm
        shadow-[#03045e]/10
        p-6
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary rounded-t-md" />

      {/* Top Row */}
      <header className="flex items-start justify-between mt-3">
        <div>
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-primary
            "
          >
            {label}
          </span>

          <h3 className="mt-3 text-xl font-semibold leading-snug">
            {title}
          </h3>
        </div>

        <div
          className="
            shrink-0
            w-12
            h-12
            rounded-full
            bg-primary/5
            border
            border-primary/10
            flex
            items-center
            justify-center
            transition-transform
            duration-300
            group-hover:rotate-6
          "
        >
          <Icon className="size-6 text-primary" />
        </div>
      </header>

      {/* Divider */}
      <div className="w-12 h-[2px] bg-primary/20 rounded-full my-5" />

      {/* Description */}
      <p className="text-black/70 leading-8">
        {description}
      </p>
    </article>
  );
};

export default PromiseCard;