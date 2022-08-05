import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div >

<header className="text-gray-600 body-font bg-teal-500 drop-shadow-xl">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image src="/Images/sg.png"  className="w-20 h-20 p-2  " viewBox="0 0 24 24" width={`40`} height={`40`}  alt="Sagar Nandy" />
      
      <span className="ml-2 text-2xl text-white">Sagar Nandy</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
     <Link href="/"><a className="mr-5 text-white hover:text-white-900" >Home</a></Link> 
     <Link href="/Education"><a className="mr-5 text-white hover:text-white-900">Education</a></Link> 
     <Link href="/About"><a className="mr-5 text-white hover:text-white-900">About</a></Link> 

     <Link href="/Contact"><a className="mr-5 text-white hover:text-white-900">Contact</a></Link> 

    </nav>
   
  </div>
</header>
    </div>
  )
}

export default Navbar