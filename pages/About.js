import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Footer from '../components/Footer'
import Image from 'next/image'


const about = () => {
  return (
    <div>
      <Head>
        <title>About - Sagar Nandy </title>
        <meta title='Sagar Nandy | Junior Web Developer - https://nandysagar.in'/> 
        <meta name="description" content=" Sagar Nandy, Web Developer, Portfolio, Backend Developer" />
        <link rel="icon" href="/favicon.ico" />
       
        
      </Head>

      <Navbar/>

      <div className="md:container mx-auto px-4 ">

      <div className="mt-20 ">
      <h1 className="text-teal-500 text-4xl lg:text-8xl font-bold text-center mb-4 md:mb-6" >
        <i className='fa fa-info-circle'></i> About Sagar
      

        </h1>
       
      </div>

      <section className="text-gray-600 body-font">
  <div className="container px-5 py-20 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg  overflow-hidden">
        <Image width={`100`} height={`100`} layout='responsive' src="/Images/1.jpg" alt="Motivational Quotes"/>
      </div>
      <div className="flex flex-col sm:flex-row mt-10 ">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className=" rounded-full inline-flex items-center justify-center bg-teal-300 text-gray-400 p-2">
          <Image src="/Images/sg.png"  height={`70`} width={`70`} className="w-full h-full p-2  " alt="Sagar Nandy" />

          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-2xl">Sagar Nandy</h2>
            <div className="w-12 h-1 bg-teal-500 rounded mt-2 mb-4"></div>
            <p className="text-base">Junior Web Developer</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">Hi Guys, Welcome To My Website. Myself Sagar Nandy,
I'm Graduated In Mathematics Honours From Santipur College Under University Of Kalyani.I Am Learning Web Development As My Interest. I Am Just New To The Web Development And Learn Basics Of Web Development. This Is My Fifth Website Made Using HTML,CSS, JavaScript And Bootsrap. I Love Javascript Most Because It Provides Many Functionality To Make A Website With User Interaction. But I Am Not A Master Of JavaScript. But I Tried Hard To Learn Web Development.</p>

<p className="leading-relaxed text-lg mb-4"> I Have Already Completed Basics Of FrontEnd Development. Now I Am Learning Backend Development As My Interest i.e PHP & Node Js. I Wanted To Be A Web Developer In Future. I Like To Make Website.</p>

<p className="leading-relaxed text-lg mb-4"> If You Want To Know More About Me You Can Filled Up The Contact Form With Valid Details.You Can Suggest Me Some Awesome Website Design By Sending Me An Email. </p>

<code className='font-bold text-2xl text-red-400'>Tere Dhoke Ne Haame Coding Sikha Diya - Sagar Nandy</code>
         
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

export default about