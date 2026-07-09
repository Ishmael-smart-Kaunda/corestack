import ServiceModule from "../services components/ServicesModule";
import services from "../../data/servicesModulesData";

const ServicesList = () => {
  return (
    <section
      id="services"
      className="w-full px-5 md:px-15 py-20 bg-gray-100/50"
    >
      {/* Section Header */}
      <header className="max-w-4xl mx-auto text-center">
        <span className="text-primary font-semibold uppercase tracking-widest">
          Our Services
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#03045e]">
          Solutions Built Around Your Business
        </h2>

        <p className="mt-6 text-lg text-black/70 leading-8">
          Every business has unique challenges, which is why our services are
          designed to address different aspects of digital growth. Explore what
          we offer and discover how we can help your business work smarter,
          serve customers better, and grow with confidence.
        </p>
      </header>

      {/* Services */}
      <div className="max-w-7xl mx-auto mt-20">
        {services.map((service, index) => (
          <ServiceModule
            key={service.id}
            {...service}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesList;