import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import Image  from 'next/image'



const Hero = () => {


  const {text} = useTypewriter({
    words: [' Sagar Nandy', ' A Junior Web Developer'],
    loop: 0, // Infinit
    cursor : false,
    
    typeSpeed: 70,
    deleteSpeed : 50,
    delaySpeed : 1000
  })



  const cvAlert = () => {
    swal("For CV Please Drop a email at hello@nandysagar.in ","",);
  }
  const hireMe = () => {
    swal("Drop a email at hello@nandysagar.in with  project details.","",);
  }


 
  return (

    <div className='container-sm'>

<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:py-10">
      <h1 className="title-font sm:text-5xl  text-6xl mb-6 font-bold text-teal-500 ml-4">HI, I'm 
             <span className="text-teal-600">{text}<span className='cursor'>|</span></span>
      </h1>
      <p className="mb-5 leading-relaxed ml-4 text-xl">A Junior Web Developer with 1 year experience from Nadia, West Bengal. I love to build website and convert custom web design to a template. Recently I started to learn backend development using PHP and Node Js with the help of Express Js.</p>
      <p className="ml-4 mb-10 text-3xl font-bold text-teal-500">Lets Learn Together &amp; Build Something New.</p>
      
      <div className="flex justify-center ml-4 space-x-2 ">
        <button className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded-full text-lg" onClick={hireMe}>I'm Available</button>
        <button className="inline-flex text-white bg-teal-700 border-0 py-2 px-6 space-x-1 focus:outline-none hover:bg-teal-500 rounded-full text-lg" onClick={cvAlert}>
<i className='fa fa-file-pdf-o space-x-4'/>
            <span>Download CV</span></button>
       
      </div>
    </div>
    <div className="lg:max-w-full lg:w-1/4 md:w-1/2 w-5/6 p-7 rounded-full bg-teal-400">
      <Image className=" h-100 rounded-full bg-white "  src="/Images/sg6.png" height={400} width={400}  alt="Sagar Nandy" />
    </div>
  </div>
</section>



    </div>
  )
}

export default Hero