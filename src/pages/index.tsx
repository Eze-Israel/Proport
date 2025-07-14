import Footer from "../components/Footer"
import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact"
import Projects from "../components/Projects"
import Skills from "../components/Skills";
import { useLayoutEffect } from "react";
import HeroSection from "../components/HeroSection";
import Scroll from "../components/Scroll";
import Testimonies from "../components/Testimonies";
import Counter from '../components/Counter'



export default function Home(){
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return(
        <div>
            <Header />
            <HeroSection />
            <Scroll />
            <section>
            <About />
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-10 bg-gray-50">
            <Counter end={3} suffix="+" label="Years of Experience" />
            <Counter end={70} suffix="+" label="Projects Completed" />
            <Counter end={30} suffix="+" label="Happy Clients" />
            <Counter end={100} suffix="%" label="Job Success Rate" />
            </div>
            <Skills />
            <Projects />
            <Testimonies />
            <Contact />
            </section>
            <Footer />
         </div>
    );
}