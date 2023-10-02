import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-color shadow-black shadow-md'>
    
      <div className='text-white flex items-center justify-between mx-20'>
       <div className='logo my-5'>
         <a className='cursor-pointer'>MisoftIt</a>
       </div>
        <div className='nav my-5 flex items-center gap-8'>
          <a className='hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 '>Home</a>
          <a>Home</a>
          <a>Home</a>
          <a>Home</a>
        </div>
          <div className='contact my-5'>
             <a>Contact</a>
          </div>
       </div>
      </div>
  )
}

export default Navbar
