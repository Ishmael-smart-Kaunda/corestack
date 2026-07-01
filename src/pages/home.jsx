import Hero from "../components/home components/hero";
import Services from "../components/home components/services";
import Quotes from "../components/home components/market quotes";
import FeaturedSolutions from "../components/home components/featured solutions/featured solution";
import CTA from "../components/home components/CTA";
import FQA from "../components/home components/FAQ"

const Home = () => {
  return (
          <>
            <Hero />
            <Services/>
            
            <FeaturedSolutions/>
            <CTA/>
            <FQA/>

          </>
  )
}
export default Home;
