import React from 'react'
import Products from './ProjectData'
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import { motion} from "framer-motion";



const categories = [
  'All', 'Web site', 'Web App', 'Ecommerce',
];


const Projects: React.FC = () => {

  const [activeCategory, setActiveCategory] = useState('All')
 const filteredProjects = activeCategory === 'All' ? Products 
    : Products.filter(project => project.category === activeCategory
 )


      const hoverEffect = {
      scaleY: 1.05,
     transition: {duration: 0.3},
   };
  return (
    <section className='py-8 md:py-16 bg-gray-50  md:px-[100] px-5'>
    <motion.h1
            initial={{x: -300}}
            whileInView={{
                x:0,
                transition: {
                    type:"spring",
                    bounce:0.25,
                    duration:5,
                }
            }}
            whileHover={hoverEffect}
            viewport={{once: true}}
            id="projects"
             >
    <SectionTitle  title='MY PROJECTS'/>
    <p className='text-center md:text-2xl'>Some completed Public Projects </p>
         <div  className='flex justify-center gap-4 mb-8'>
          {categories.map(category => (
            <button key={category}
            onClick={() => setActiveCategory(category)}
            className={`md:px-4 p-1 md:py-2 rounded flex sm:col ${activeCategory === category 
              ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            >
              {category}

            </button>
          ))} 
          </div>
    </motion.h1>
    
        <motion.div 
         initial={{y:300, opacity: 0}}
         whileInView={{
          y:0, opacity: 1,
          transition:{
            type:"spring",
            bounce:0.25,
            duration:5,
          }
         }}
         viewport={{once: true}}
         className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
          {filteredProjects.map((project, index)=> (
            <ProjectCard 
            key={index}
            category={project.category}
            name={project.name}
            description={project.description}
            image={project.image}
            Details={project.Details}
            TechStack={project.TechStack}
            Link={project.Link}

            />
          ))}

         </motion.div>
      
    </section>
  )
}

export default Projects



