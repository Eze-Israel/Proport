import { TypeAnimation } from 'react-type-animation';

const TextAimation2 = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am a professional Front-end Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'I work closely with designers to ensure seamless transition',
        2000,
        "ReactJs, NextJs, FireBase, Redux-ToolKit, RestFul-API",
        2000,
         "To manage code changes and collaborate with team members",
        2000,
         "GitHub pages, FireBase Hosting and Vercel",
        2000,
        "WhatsApp, Email, linkedin or Use the Form below",
        2000,
        'For your Patronage',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
     className='TextAnimation2'/>
  );
};

export default TextAimation2