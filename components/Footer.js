import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>

<footer className="text-gray-600 body-font bg-teal-100">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10 ">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900  ">
    <div className='bg-teal-500 rounded-full pt-2 pb-1 px-2'>
        <Image src="/Images/sg.png"   width={`40` } height={`40`}  alt="Sagar Nandy"/>
        </div>
        <span className="ml-3 text-xl">Sagar Nandy</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">Design &amp; Developed By Sagar Nandy.</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Free Course</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="https://www.learnvern.com/r1/bb493c">
            <a className="text-gray-600 hover:text-gray-800">Learn Vern</a>
            </Link>
          </li>
          <li> <Link href="https://swayam.gov.in/">
            <a className="text-gray-600 hover:text-gray-800">Swayam</a>
           </Link>
          </li>
          <li> <Link href="https://spoken-tutorial.org/">
            <a className="text-gray-600 hover:text-gray-800">Spoken Tutorials</a>
           </Link>
          </li>
          <li> <Link href="https://freeCodeCamp.org/">
            <a className="text-gray-600 hover:text-gray-800">freeCodeCamp</a>
           </Link>
          </li>
          <li> <Link href="https://www.scaler.com/academy/">
            <a className="text-gray-600 hover:text-gray-800">Scaler Academy</a>
           </Link>
          </li>
         
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">YouTube Channel</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="https://youtube.com/CodeWithHarry/">
            <a className="text-gray-600 hover:text-gray-800">CodeWithHarry</a>
            </Link>
          </li>
          <li>
            <Link href="https://youtube.com/ThapaTechnical/">
            <a className="text-gray-600 hover:text-gray-800">Thapa Technical</a>
            </Link>
          </li>
          <li>
            <Link href="https://youtube.com/freecodecamp/">
            <a className="text-gray-600 hover:text-gray-800">freeCodeCamp</a>
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/c/TraversyMedia">
            <a className="text-gray-600 hover:text-gray-800">TraversyMedia</a>
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/c/ProgrammingwithVishal">
            <a className="text-gray-600 hover:text-gray-800">ProgrammingwithVishal</a>
            </Link>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Other Courses</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="https://www.nielit.gov.in/haridwar/content/online-courses">
            <a className="text-gray-600 hover:text-gray-800">NIELIT Course</a>
            </Link>
          </li>
          <li>
            <Link href="https://learning.tcsionhub.in/category/online-courses/">
            <a className="text-gray-600 hover:text-gray-800">TCS Online Course</a>
            </Link>
          </li>
          <li>
            <Link href="https://w3schools.com/">
            <a className="text-gray-600 hover:text-gray-800">W3School.com</a>
            </Link>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Projects</h2>
        <nav className="list-none mb-10">
       
          <li>
          <Link href="/"><a className=" text-gray-600 hover:text-gray-800 " >Home</a></Link> 
    
    

          </li>
          <li>
          <Link href="/Education"><a className=" text-gray-600 hover:text-gray-800">Education</a></Link> 
          </li>
          <li>
          <Link href="/About"><a className="m text-gray-600 hover:text-gray-800">About</a></Link> 
          </li>
          <li>
          <Link href="/Contact"><a className=" text-gray-600 hover:text-gray-800">Contact</a></Link> 
          </li>
</nav>
</div>
    </div>
  </div>
  <div className="bg-teal-500 ">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white text-sm text-center sm:text-left">© 2022 
        <a href="https://nandysagar.in/" rel="noopener noreferrer" className="text-white ml-1" target="_blank">nandysagar.in</a> - All right reserved.
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <Link href={`https://www.facebook.com/sagar.nandy.1029`}>
        <a className="text-white">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        </Link>
        <a className="ml-3 text-white">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
       
      </span>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer