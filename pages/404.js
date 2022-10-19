import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Footer from '../components/Footer'
import Link from 'next/link'

const Custom404 = () => {
  return (
    <div>
               <Head>
        <title> Oops! Page Is Not Found</title>
        <meta title='Sagar Nandy | Junior Web Developer - https://nandysagar.in'/> 
        <meta name="description" content=" Sagar Nandy, Web Developer, Portfolio, Backend Developer" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
        
        <Navbar/>


        <div className="flex justify-center my-20">
  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-lg">
    <h1 className="text-teal-600 text-7xl leading-tight font-bold  mb-2 text-center">404 Error</h1>
    <p className="text-gray-700  text-2xl mb-4 font-semibold text-center">
     Oops! Page Is Not Found
    </p>
    <p className="text-gray-700 text-base mb-4 px-6">
      
       The Page You Are Looking For Is Not Available. It Might Be Deleted Or Moved To Another Location.  Please Check The URL Or Go Back To Home Page.        </p>

       <div className="text-center">
        <Link href="/">
    <a className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><i classNameName="fa fa-home"></i> Back To Home</a>
    </Link>
    </div>
  </div>
</div>




  <Footer/>
    </div>
  )
}

export default Custom404