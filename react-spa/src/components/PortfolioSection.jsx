import { SECTION_HEIGHT } from "../sectionHeight";
import ParallaxDiv from "./ParallaxDiv";
import PortfolioCard from "./PortfolioCard";

const PortfolioSection = () => {
    return (
        <section
            className="bg-[#310] h-screen py-16 md:py-20 lg:py-24 flex items-center"
            style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <ParallaxDiv
                        text="OUR PORTFOLIO"
                        start={-500}
                        end={500}
                        className="text-yellow-500 text-7xl md:text-5xl lg:text-8xl font-bold text-center px-10"
                    />

                    <ParallaxDiv
                        text="Explore our latest projects and see how we've helped businesses grow."
                        start={-400}
                        end={600}
                        className="text-yellow-700 text-base md:text-2xl lg:text-5xl font-semibold text-center p-10"
                    />
                </div>

                {/* Portfolio Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <PortfolioCard
                        title="Project Alpha"
                        description="A complete branding package for a tech startup."
                        image="/src/assets/about-us.jpg"
                        start={-200}
                        end={100}
                    />
                    <PortfolioCard
                        title="Project Beta"
                        description="Web design and development for an e-commerce platform."
                        image="/src/assets/port1.jpg"
                        start={-200}
                        end={200}
                    />
                    <PortfolioCard
                        title="Project Gamma"
                        description="Logo and print design for a local restaurant."
                        image="/src/assets/port2.jpg"
                        start={-200}
                        end={200}
                    />
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;