import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Footer from '../components/Footer'
import Image from 'next/image'



const education = () => {
  return (
    <div>

<Head>
        <title> Education - Sagar Nandy</title>
        <meta title='Sagar Nandy | Junior Web Developer - https://nandysagar.in'/> 
        <meta name="description" content=" Sagar Nandy, Web Developer, Portfolio, Backend Developer" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
        
        <Navbar/>
        <div className='md:container mx-auto px-4 '>

        <div className="mt-20 ">
      <h1 className="text-teal-500 text-4xl lg:text-8xl font-bold text-center mb-4 md:mb-6" >
        <i className='fa fa-graduation-cap'></i> Education Details 
      

        </h1>
       
      </div>

    <div className="lg:w-4/6 mx-auto mt-20">
    <div className="rounded-lg h-64 overflow-hidden">
        <Image  height={`200`} width={`600`} layout="responsive" className="object-cover object-center h-full w-full" src="/Images/4.jpg" alt="Motivational Quotes"/>
      </div>
      </div>
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-20 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">
            <i className="fa fa-mortar-board"></i> Secondary Education</span>
          <span className="mt-1 text-gray-500 text-sm px-5">2015-2016</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
            <i className="fa fa-institution"></i> Santipur Municipal High School</h2>
          <p className="leading-relaxed">Under West Bengal Board of Secondary Education <br/> Santipur, Nadia, West Bengal</p>
          <p className="text-indigo-500 inline-flex items-center mt-4 font-bold">Percentage : 87%
            
          </p>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">
          <i className="fa fa-mortar-board"></i> Higher Secondary</span>
          <span className="mt-1 text-gray-500 text-sm px-5">2017-2018</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          <i className="fa fa-institution"></i> Santipur Municipal High School</h2>
          <p className="leading-relaxed">Stream : Pure Science i.e. Mathematics, Physics, Chemistry, Biology</p>
          
          <p className="leading-relaxed">Under West Bengal Board of Secondary Education <br/> Santipur, Nadia, West Bengal</p>
          <p className="text-indigo-500 inline-flex items-center mt-4 font-bold">Percentage : 80.4% </p>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">
            <i className="fa fa-mortar-board"></i> Bachelor Degree </span>
          <span className="text-sm text-gray-500 px-5">2018-2021</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
            <i className="fa fa-institution"></i> Santipur College </h2>
          <p className="leading-relaxed"> <span className='font-semibold'>University Name : </span>University of Kalyani</p>
          <p className="leading-relaxed"> <span className='font-semibold'>Degree Name : </span>Bachelor of Science i.e. B.Sc</p>
          <p className="leading-relaxed"> <span className='font-semibold'>Subject : </span>B.Sc Honours in Mathematics</p>
          <p className="text-indigo-500 inline-flex items-center mt-4 font-bold">Percentage : 78.86% </p>
          <p className="text-indigo-500  items-center mt-2 font-bold">CGPA : 8.41 </p>

          
        </div>
        
      </div>

      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">
            <i className="fa fa-mortar-board"></i> Master Degree <br/> (Present)</span>
          <span className="text-sm text-gray-500 px-5">2021-2023</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
            <i className="fa fa-institution"></i> University of Kalyani</h2>
          
          <p className="leading-relaxed"> <span className='font-semibold'>Degree Name : </span>Master of Science i.e. M.Sc</p>
          <p className="leading-relaxed"> <span className='font-semibold'>Subject : </span>M.Sc in Applied Mathematics</p>
          <p className="text-indigo-500 inline-flex items-center mt-4 font-bold">Percentage :  --</p>
          <p className="text-indigo-500  items-center mt-2 font-bold">CGPA : -- </p>

          
        </div>
        
      </div>


    </div>
  </div>
</section>
</div>

<Footer/>
    </div>
  )
}

export default education