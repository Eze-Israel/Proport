import { TypeAnimation } from 'react-type-animation';

const TextAimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Front-End Developer | UI/UX Enthusiast | Problem Solver',
        7000, // wait 1s before replacing "Mice" with "Hamsters"
        // Same substring at the start will only be typed out once, initially
        'My name is Eze Isreal Oluomachukwu',
        6000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am a professional Front-end Developer',
        6000,
        'I develop Scalable and Responsive Websites',
        6000,
        "Proficient in HTML5, JavaScript, CSS3, TailwindCSS,",
        5000,
        "ReactJs, NextJs, FireBase, Redux-ToolKit, RestFul-API",
        5000,
        "Version control system: Git/GitHub",
        6000,
        "Proficient in Free hosting platforms like:",
        5000,
        "GitHub pages, FireBase Hosting and Vercel",
        6000,
        'HIRE ME!! ',
        7000,
        
      ]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
     className='TextAnimation'/>
  );
};

export default TextAimation