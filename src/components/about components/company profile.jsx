import AboutUs from "./company profile/who are";
import OurExistence from "./company profile/our existence";
import OurDirection from "./company profile/mission, vission,values";
import Approach from "./company profile/our approach";
import WhyUs from "./company profile/why us";
import Team from "./company profile/team";
const Profile = ()=> {
      return(
           <>
            <AboutUs/>
            <OurDirection/>
            <OurExistence/>
            
            <Approach/>
               <hr className="max-w-screen-lg text-black/20 mx-auto my-8" />
            <WhyUs/>
            <Team/>
        
           </>
      )
}
export default Profile;