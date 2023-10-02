import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-color shadow-black shadow-md'>
    
      <div className='text-white flex items-center justify-between mx-20'>
       <div className='logo my-5'>
         <a className='cursor-pointer'>MisoftIt</a>
       </div>
        <div className='nav my-5 flex items-center gap-8'>
          <a className='custom-color'>Home</a>
          <a>Services</a>
          <a>Technologies</a>
          <a>Process</a>
          <a>Portfolio</a>
        </div>
          <div className='contact my-5'>
             <button className='rounded-xl outline outline-offset-4 outline-1'><span className='mx-3'>Let's talk</span></button>
          </div>
       </div>
      </div>
  )
}

export default Navbar
