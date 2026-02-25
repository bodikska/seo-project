import HomePageHeader from '../HomePageHeader/HomePageHeader';
import AboutSection from '../AboutSection/AboutSection';
import SeoAnalysis from '../SeoAnalysis/SeoAnalysis';
import Accordion from '../Accordion/Accordion';
import Benefits from '../Benefits/Benefits';


function HomePage() {
    return(
        <>

         <AboutSection />
         <SeoAnalysis/>
         <Accordion/>
         <Benefits/>
        </>
           
        
    )
}

export default HomePage;