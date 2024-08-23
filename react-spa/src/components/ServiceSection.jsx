import { SECTION_HEIGHT } from '../sectionHeight';
import ParallaxDiv from './ParallaxDiv';
import ServiceCard from './ServiceCard';

const ServiceSection = () => {
    return (
        <section className="w-full bg-yellow-500 py-16 md:py-20 lg:py-24 flex items-center my-auto"
            style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }} 
        >
            <div className="w-full h-full mx-auto px-4 sm:px-6 lg:px-8 items-center">
                <ParallaxDiv
                    text="OUR SERVICES"
                    start={-200}
                    end={200}
                    className="w-full text-[#310] text-7xl md:text-5xl lg:text-8xl font-bold text-center px-10"
                />
                <ParallaxDiv
                    text="We offer a range of graphic design services to help your business stand out."
                    start={-300}
                    end={300}
                    className="w-full text-yellow-900 text-4xl md:text-3xl lg:text-5xl text-center my-20 px-10"
                />

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32 p-10 items-center my-40">
                    <ServiceCard
                        title="UI/UX Design"
                        description="Our UI/UX design services focus on usability, accessibility, and aesthetics to ensure your product is user-friendly and engaging."
                        link="#"
                        start={-100}
                        end={700}
                    />
                    <ServiceCard
                        title="Front-End Development"
                        description="Our front-end development services include HTML, CSS, and JavaScript to create fast, responsive, and interactive web applications."
                        link="#"
                        start={-50}
                        end={400}
                    />
                    <ServiceCard
                        title="Branding"
                        description="Our branding services include logo design, color palette selection, typography, and overall visual identity development."
                        link="#"
                        start={-200}
                        end={750}
                    />
                    <ServiceCard
                        title="Web Design"
                        description="Our responsive web design services ensure that your site looks great and functions seamlessly on desktops, tablets, and smartphones."
                        link="#"
                        start={0}
                        end={300}
                    />
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;