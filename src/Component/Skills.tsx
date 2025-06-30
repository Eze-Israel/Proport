// import React from "react"
// import Image from "next/image"
// import { motion } from "framer-motion"
// // import Myservices from "./Myservices";

// const Skills: React.FC = () => {
//   const hoverEffect = {
//    transition: {duration: 0.3},
//  };

//   return (
//     <div 
//     id="skills"
//     className="skills">
       
//   <div className="write">
//    <h1 className="font-bold text-center m-2  p-2 text-xl md:text-2xl">Technical Skills</h1>
  
//    </div>

   
//    <motion.div 
//     initial={{y:300, opacity: 0}}
//     whileInView={{
//      y:0, opacity: 1,
//      transition:{
//        type:"spring",
//        bounce:0.25,
//        duration:1,
//      }
//     }}
//     viewport={{once: true}}
//     whileHover={hoverEffect}
    
//    className="Languages"
//     >
   
//     <div className="FirstDiv">
//     <Image 
//     src="/images/Html5.png"
//     width={600}
//     height={600}
//     alt="Html5 photo"
//     />
//     <Image 
//     src="/images/Javascrip2.png"
//     width={600}
//     height={600}
//     alt="JavaScript photo"
//     />
//     </div>

//     <div className="SecondDiv">
//     <Image 
//     src="/images/Css3.png"
//     width={600}
//     height={600}
//     alt="Css3 photo"
//     />
//     <Image 
//     src="/images/TailwindCss.jpg"
//     width={600}
//     height={600}
//     alt="TailwindCSS photo"
//     />
//     </div>

//     <div className="ThirdDiv">
//     <Image 
//     src="/images/RouterDom.jpg"
//     width={600}
//     height={600}
//     alt="RouterDom photo"
//     />
//     <Image 
//     src="/images/Bootsrap.jpg"
//     width={600}
//     height={600}
//     alt="Bootstrap photo"
//     />
//     </div>

//     <div className="FourthDiv">
//     <Image 
//     src="/images/Redux.png"
//     width={600}
//     height={600}
//     alt="Redux photo"
//     />
//     <Image 
//     src="/images/Firebase.png"
//     width={600}
//     height={600}
//     alt="Firebase photo"
//     />
//     </div>

//     <div className="FifthDiv">
//     <Image 
//     src="/images/ReactQuery.jpg"
//     width={600}
//     height={600}
//     alt="React query photo"
//     />
//     <Image 
//     src="/images/React-logo.jpg"
//     width={600}
//     height={600}
//     alt="React photo"
//     />
//     </div>

//     <div className="SixthDiv">
//     <Image 
//     src="/images/TypeScript.png"
//     width={600}
//     height={600}
//     alt="TypeScript photo"
//     />
//     <Image 
//     src="/images/Nextjs.png"
//     width={600}
//     height={600}
//     alt="Nextjs photo"
//     />
//     </div>

//      <div className="sevethDiv">
//     <Image 
//     src="/images/gitbash.png"
//     width={600}
//     height={600}
//     alt="gitbash photo"
//     />
//     <Image 
//     src="/images/github.jpeg"
//     width={600}
//     height={600}
//     alt="github photo"
//     /> 
//     </div>
//    </motion.div>
//     </div>
    
    
//   )
// }

// export default Skills


import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { src: "/images/Html5.png", alt: "HTML5" },
  { src: "/images/Javascrip2.png", alt: "JavaScript" },
  { src: "/images/Css3.png", alt: "CSS3" },
  { src: "/images/TailwindCss.jpg", alt: "Tailwind CSS" },
  { src: "/images/RouterDom.jpg", alt: "React Router" },
  { src: "/images/Bootsrap.jpg", alt: "Bootstrap" },
  { src: "/images/Redux.png", alt: "Redux" },
  { src: "/images/Firebase.png", alt: "Firebase" },
  { src: "/images/ReactQuery.jpg", alt: "React Query" },
  { src: "/images/React-logo.jpg", alt: "React" },
  { src: "/images/TypeScript.png", alt: "TypeScript" },
  { src: "/images/Nextjs.png", alt: "Next.js" },
  { src: "/images/gitbash.png", alt: "Git Bash" },
  { src: "/images/github.jpeg", alt: "GitHub" },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-12 px-4 bg-gray-50"
    >
      <h2 className="text-center font-bold text-2xl md:text-3xl mb-8 text-green-700">
        Technical Skills
      </h2>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { type: "spring", bounce: 0.3, duration: 1 },
        }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <Image
              src={skill.src}
              alt={skill.alt}
              width={128}
              height={128}
              className="rounded-full object-cover w-24 h-24 md:w-32 md:h-32 border-2 border-green-300 shadow-md"
            />
            <p className="text-sm text-center mt-2 font-medium text-gray-700">{skill.alt}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
