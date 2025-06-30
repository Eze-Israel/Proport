import ProgressBar from "./ProgressBar"

const About = () => {
  
  return (
      <div 
      id="about"
      className="About">
      
        <div >
          <h2 className="text-center text-2xl md:text-4xl"><b className="text-red-900">A</b>bout<b className="text-red-900"> M</b>e</h2>
        <p className="text-center"> Hey Dear,👋🏻 Welcome to my portfolio website. Kindly visit my CV page to know more about me.</p>
        <h2 className="text-center underline"> Professional Skill Ratings</h2>
        <p></p>
           
            <span>
              Website Design
             <ProgressBar 
             percentage={98}
             />     
             </span>
            <span>
             Front~End Website Development
             <ProgressBar 
             percentage={99}
             />     
             </span>
            <span>
              Web Applications
             <ProgressBar 
             percentage={95}
             />     
             </span>
            <span>
              Version Control(Git/GitHub)
             <ProgressBar 
             percentage={95}
             />     
             </span>
            <span>
              Backend Skills 
             <ProgressBar 
             percentage={90}
             />     
             </span>
        </div>


      </div>
  )
}

export default About