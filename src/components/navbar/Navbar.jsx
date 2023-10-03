"use client"
import { useState } from "react";
import Image from 'next/image'
import Link from 'next/link';
import Logo from 'public/logo.png'
import closeBtn from 'public/close.svg'
import menu from 'public/menu.svg'


const navigation = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Services',
    url: '/',
  },
  {
    id: 3,
    title: 'Technologies',
    url: '/',
  },
  {
    id: 4,
    title: 'Process',
    url: '/',
  },
  {
    id: 5,
    title: 'Portfolio',
    url: '/',
  },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-color shadow-black shadow-md w-full fixed top-0 left-0 right-0 z-10">
      <div className='text-white flex items-center justify-between px-16 mx-auto'>
      <div className='my-5'>
      <Link href="/">
              <Image
                className="w-[124px] h-[32px]"
                src={Logo}
                alt="Misoft"
              />
      </Link>
      </div>

      <ul className="hidden w-full md:block md:w-auto">
      <div className='flex my-5 items-center gap-8'>
          {navigation.map((link) => (
            <Link key={link.id} href={link.url} className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === link.title ? "act-color" : "text-white"
            }`}>
                {link.title}
            </Link>
            ))}
        </div>
      </ul>

      <Image
                className="w-[22px] h-[22px] object-contain lg:hidden"
                src={toggle ? closeBtn : menu}
                alt="menu"
                onClick={() => setToggle(!toggle)}
        />

      <div className='contact my-5'>
             <button className='rounded-xl outline outline-offset-4 outline-1 out-color'><span className='mx-3'>Lets talk</span></button>
          </div>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-10 my-3 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex justify-end items-start flex-1 flex-col nv-bg rounded-md">
          {navigation.map((link) => (
            <Link key={link.id} href={link.url} className={`font-poppins font-normal cursor-pointer text-[16px] py-1 px-4 ${
              active === link.title ? "text-white" : "text-dimWhite"
            }`}>
                {link.title}
            </Link>
            ))}
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
