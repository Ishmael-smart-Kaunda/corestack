

const CTA= ()=> {
  return (
    <section className="g-gray-900 px-6">
      <div className="max-w-screen-lg mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-black/70 p-8 md:p-12 lg:p-16">

          
          <div className="relative z-10 max-w-3xl space-y-8">
            <p className="
                     tracking-widest
                     inline-flex 
                     items-center 
                     rounded-full 
                     bg-white/20 
                     px-6 py-2
                     backdrop-blur-md
                     text-sm 
                     font-medium 
                     text-white 
                     backdrop-blur-sm
                     ">
              READY TO MODERNIZE YOUR OPERATIONS?
            </p>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Transform Challenges Into Scalable Systems.
            </h2>

            <p className="mt-6 text-lg text-blue-100">
              Whether you need an online store, process automation, or a custom
              business platform, we help organisations identify opportunities
              and implement technology that delivers measurable results.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-blue-700 transition hover:bg-gray-100"
              >
                Schedule a Consultation
              </a>

              <a
                href="/solutions"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Explore Our Solutions
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CTA;