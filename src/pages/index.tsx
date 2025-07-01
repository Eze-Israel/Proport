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
            <Skills />
            <Projects />
            <Testimonies />
            <Contact />
            </section>
            <Footer />
         </div>
    );
}