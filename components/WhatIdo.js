import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const WhatIdo = () => {
  const stop = () => {
    {`this.stop()`;}
  }

  const mout = () => {
    {`this.start()`;}
  }
  return (
    <>
<div className=" mx-5">
    <div className="  bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full" role="alert">

  <marquee behavior="alternate" onMouseOver={stop} onMouseOut={mout} scrolldelay="4" width="100%">
        <b className="text-2xl"><i className="fa fa-bullhorn"></i> <code>'Dhoke Ne Tere Haame Coding Sikha Diya'</code> - Sagar Nandy</b>
      </marquee>
</div>
</div>


        <div className=" pt-20">
        <div className="flex space-x-2 justify-center">
  <h2 className="text-4xl font-medium leading-tight text-gray-800">

    <span className="inline-block p-4 leading-none text-center whitespace-nowrap align-baseline font-bold bg-teal-600 text-white rounded">What I Can Do ?</span>
  </h2>
</div>
        </div>


<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto ">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-teal-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-lg ">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" height={`300`} width={`600`} layout="responsive" src="/Images/html.png" alt="HTML"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">WEB TEMPLATE DESIGN</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">HTML </h1>
            <p className="leading-relaxed mb-3">HTML Stands for Hypertext Markup Language.It is the most basic building block of the Web. It defines the meaning and structure of web content. </p>
            <div className="flex items-center flex-wrap ">
                <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML">
              <a className="text-teal-600 font-bold inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-teal-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-lg ">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" height={`300`} width={`600`} layout="responsive" src="/Images/css.jpg" alt="CSS"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">WEB TEMPLATE DESIGN</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">CSS</h1>
            <p className="leading-relaxed mb-3"> CSS stands for Cascading Style Sheets.It describes how HTML elements are to be displayed on screen, paper, or in other media.</p>
            <div className="flex items-center flex-wrap">
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <a className="text-teal-600 font-bold inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              </Link>
             
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-teal-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-lg ">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" height={`300`} width={`600`} layout="responsive" src="/Images/js.jpg" alt="Javascript"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Programming Language</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Javascript <span className="inline-block p-1 leading-none text-center whitespace-nowrap text-sm align-baseline font-bold bg-pink-600 text-white rounded">Favourite</span></h1>
            <p className="leading-relaxed mb-3"> JavaScript is the interpreted, or just-in-time compiled programming language. It is  most well-known as the scripting language for Web pages and  it very is easy to learn.</p>
            <div className="flex items-center flex-wrap">
            <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <a className="text-teal-600 font-bold inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</section>


<section className="text-gray-600 body-font">
  <div className="container px-5  pb-24 mx-auto ">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-teal-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-lg ">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center"  height={`300`} width={`600`} layout="responsive" src="/Images/PHP.jpg" alt="PHP"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Programming Language</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">PHP  <span className="inline-block p-1 leading-none text-center whitespace-nowrap text-sm align-baseline font-bold bg-pink-600 text-white rounded">Love</span> </h1>
            <p className="leading-relaxed mb-3">PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages. </p>
            <div className="flex items-center flex-wrap ">
                <Link href="https://www.php.net/">
              <a className="text-teal-600 font-bold inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-teal-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-lg ">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" height={`300`} width={`600`} layout="responsive" src="/Images/node.png" alt="Node Js"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Programming Language</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Node Js <span className="inline-block p-1 leading-none text-center whitespace-nowrap text-sm align-baseline font-bold bg-pink-600 text-white rounded">Crush</span><span className="inline-block p-1 mx-1 leading-none text-center whitespace-nowrap text-sm align-baseline font-bold bg-indigo-600 text-white rounded">Recently Started</span></h1>
            <p className="leading-relaxed mb-3"> Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. </p>
            <div className="flex items-center flex-wrap">
            <Link href="https://nodejs.org/en/about">
              <a className="text-teal-600 font-bold inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              </Link>
             
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-teal-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-lg ">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" height={`300`} width={`600`} layout="responsive" src="/Images/c-prg.cms" alt="C Programming"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Programming Language</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">C Programming</h1>
            <p className="leading-relaxed mb-3"> C is a general-purpose programming language, developed in 1972, and still quite popular. It is very powerful. It has been used to develop operating systems, databases, applications, etc.</p>
            <div className="flex items-center flex-wrap">
            <Link href="https://www.programiz.com/c-programming">
              <a className="text-teal-600 font-bold inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</section>


<section className="text-gray-600 body-font">
  <div className="container px-5  pb-24 mx-auto ">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-teal-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-lg ">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center"height={`300`} width={`600`} layout="responsive" src="/Images/Git.jpg" alt="Git"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Version Control</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Git  </h1>
            <p className="leading-relaxed mb-3">Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. </p>
            <div className="flex items-center flex-wrap ">
                <Link href="https://git-scm.com/">
              <a className="text-teal-600 font-bold inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-teal-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-lg ">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" height={`300`} width={`600`} layout="responsive" src="/Images/sanity.webp" alt="Sanity - A Headless CMS"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Content Management System - Headless CMS</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Sanity CMS <span className="inline-block p-1 mx-1 leading-none text-center whitespace-nowrap text-sm align-baseline font-bold bg-indigo-600 text-white rounded">Recently Started</span></h1>
            <p className="leading-relaxed mb-3"> Sanity is an open-source API-based CMS built with React.js. </p>
            <div className="flex items-center flex-wrap">
            <Link href="https://www.sanity.io/">
              <a className="text-teal-600 font-bold inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              </Link>
             
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-teal-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-lg ">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" height={`300`} width={`600`} layout="responsive" src="/Images/mysql.png" alt="MySQL"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Database Management System</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">MySQL </h1>
            <p className="leading-relaxed mb-3"> MySQL is a relational database management system (RDBMS) developed by Oracle that is based on structured query language (SQL).</p>
            <div className="flex items-center flex-wrap">
            <Link href="https://www.mysql.com/">
              <a className="text-teal-600 font-bold inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</section>

    </>
  )
}

export default WhatIdo