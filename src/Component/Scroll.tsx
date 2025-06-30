// import React from 'react'

// const Scroll = () => {



//   return (
//     <>
//         <div className='swiper-testimonial-container'>
//         <div className='swiper-testimonial-text'>
//          <p className='swip-Text'> Ecommerce|| Landing Page|| Fintech Websites|| Logistics Websites||
//             Company Websites|| Real Estate websites|| Web Applications|| School Result System
//         </p>
      
//         </div>
//         </div>
       
      
//     </>
//   )
// }

// export default Scroll


import React from 'react';

const Scroll = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-green-50 py-3 ">
      <div className="animate-marquee text-green-700 text-lg md:text-xl font-semibold font-mono tracking-wide">
        <span className="mx-6">🛒 Ecommerce</span>
        <span className="mx-6">🚀 Landing Pages</span>
        <span className="mx-6">💰 Fintech Websites</span>
        <span className="mx-6">🚚 Logistics Websites</span>
        <span className="mx-6">🏢 Company Websites</span>
        <span className="mx-6">🏘️ Real Estate</span>
        <span className="mx-6">💻 Web Applications</span>
        <span className="mx-6">📚 School Result System</span>
      </div>
    </div>
  );
};

export default Scroll;
