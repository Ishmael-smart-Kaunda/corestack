import ServicesCTA from "../components/services components/ServicesCTA";
import ServicesHero from "../components/services components/ServicesHero";
import ServicesList from "../components/services components/ServicesList";
import ValueProposition from "../components/services components/ValueProposition";

const Services = () => {
    return ( 
            <>
                <ServicesHero />
                <ServicesList />
                <ValueProposition />
                <ServicesCTA />
            </>
        )
}   
export default Services;