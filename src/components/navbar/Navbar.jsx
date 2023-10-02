import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-color shadow-black shadow-md w-full fixed top-0 left-0 right-0 z-10'>
      <div className='text-white flex items-center justify-between px-16 mx-auto'>
       <div className='logo my-5'>
         <a className='cursor-pointer'>MisoftIt</a>
       </div>
       <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
        <navbar className='hidden w-full md:block md:w-auto' id="navbar-default">
          <div className='flex my-5 items-center gap-8'>
          <a className='act-color cursor-pointer'>Home</a>
          <a className='cursor-pointer'>Services</a>
          <a className='cursor-pointer'>Technologies</a>
          <a className='cursor-pointer'>Process</a>
          <a className='cursor-pointer'>Portfolio</a>
          </div>
        </navbar>
          <div className='contact my-5'>
             <button className='rounded-xl outline outline-offset-4 outline-1 out-color'><span className='mx-3'>Let's talk</span></button>
          </div>
       </div>
      </div>
  )
}

export default Navbar
