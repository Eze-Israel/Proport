import Footer from "@/Component/Footer";
import Header from "@/Component/Header";
import About from "@/Component/About";
import Contact from "@/Component/Contact"
import Projects from "@/Component/Projects"
import Skills from "../Component/Skills";
import { useLayoutEffect } from "react";
import HeroSection from "@/Component/HeroSection";
import Scroll from "@/Component/Scroll";
import Testimonies from "@/Component/Testimonies";


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