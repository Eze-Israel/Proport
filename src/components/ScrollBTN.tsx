// import React from 'react'
// import { useState, useEffect } from 'react';
// import { BiArrowToBottom, BiArrowToTop } from 'react-icons/bi';



//     const ScrollBTN = () => {
//    const [isAtBottom, setIsAtBottom] = useState(false)
//    //  Track if user is at bottom

//     const [isVisible, setIsVisible] = useState(false)
//    // show/hide the button dynamically


//     const upScroll =() =>{
//       window.scrollTo({top: 0, behavior: "smooth"});
//     }
//     const downScroll =() => {
//       window.scrollTo({top: document.body.scrollHeight, behavior:"smooth"})
//     }

//     // check scroll position on scroll
//     useEffect(() => {
//       const handleScroll = () => {
//         const scrollTop = window.scrollY;
//         const scrollHeight = document.body.scrollHeight;
//         const clientHeight = window.innerHeight;

//         // Toggle visibility
//         setIsVisible(scrollTop > 100) //show button after scrolling 100px

//         // Check if at bottom
//         setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 10)
//       }
    

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll)
//     }, []);


//   return (
//     <div className='bg-orange-500'
//     >
//         {/* scroll up button here */}
//         {isVisible && (
//         <button className='bg-blue-500 text-white border border-gray-500  p-4 md:p-4 
//         text-lg right-0 cursor-pointer fixed z-index-auto bottom-12 rounded-full'
//         onClick={isAtBottom ? upScroll : downScroll}
//         >
//          {isAtBottom ? <BiArrowToTop /> : <BiArrowToBottom /> }
//         </button>
//          )}
        

//     </div>
//   )
// }

// export default ScrollBTN