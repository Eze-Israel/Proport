import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'
import Link from 'next/link'



const Header:  React.FC = () => {
  const [mobile, setMobile] = useState(true)


  const handleMobileChange = () => {
    setMobile(!mobile)
    
  }
  
  const handlelogoname = () => {
    setMobile(mobile)
    
  }

  
  return (
    <div className='header'>

      <div>
      <Link href="/" className="name" onClick={handlelogoname} > <b className='text-green-500'>Is</b>rael</Link>
      </div>
      <div className="mobile-icon" onClick={handleMobileChange}>
        {mobile ? <FaBars /> : <FaTimes />}
      </div>

      <div className="phone p-1 flex"><FaPhone/>+2347061033459</div>
      
            <div>
            <ul className={`${mobile ? 'nav-menu' : 'nav-menu show'}`}>
            <Link href="/" onClick={handleMobileChange}> <li className='list-items p-1'>Home</li></Link> 
            <Link href="#about" onClick={handleMobileChange}> <li className='list-items p-1'>About</li></Link> 
            <Link href="#skills" onClick={handleMobileChange}>  <li className='list-items p-1'>Skills</li></Link> 
            <Link href="#projects" onClick={handleMobileChange}> <li className='list-items p-1'>Projects</li></Link> 
            <Link href="#testimonies" onClick={handleMobileChange}> <li className='list-items p-1'>Testimonies</li></Link> 
            <Link href="#contact" onClick={handleMobileChange}> <li className='list-items p-1'>Contact</li></Link> 
            <Link href="MyResume" onClick={handleMobileChange}> 
            <li className='list-items bg-green-300 rounded-md p-1'>Download Cv</li></Link> 
            </ul>
            </div>
      

      
             
    </div>
  )
}

export default Header



