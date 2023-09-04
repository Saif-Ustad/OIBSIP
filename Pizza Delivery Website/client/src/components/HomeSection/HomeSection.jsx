import Hero from "./Hero/Hero";
import "./HomeSection.scss";
import Navbar from "./Navbar/Navbar";

const HomeSection = () => {
    return (
        <div className="homeSection">
            <Navbar />
            <Hero />
        </div>
      
    );
}

export default HomeSection;