import AboutSection from "../../components/AboutSection/AboutSection";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import HomeSection from "../../components/HomeSection/HomeSection";
import OfferSection from "../../components/OfferSection/OfferSection";
import ProductSection from "../../components/ProductSection/ProductSection";




const Home = () => {
    return(
        <div className="home">
            <HomeSection />
            <FeaturesSection />
            <ProductSection />
            <AboutSection />
            <OfferSection />
        </div>
        
    )
}

export default Home;