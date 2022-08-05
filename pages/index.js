import  Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Script from 'next/script'
import WhatIdo from '../components/WhatIdo'
import Testimonials from '../components/Testimonials'






// import styles from '../styles/Home.module.css'

export default function Home() {


  return (
   <div>
      <Head>
        <title>Home - Sagar Nandy </title>
        <meta title='Sagar Nandy | Junior Web Developer - https://nandysagar.in'/> 
        <meta name="description" content=" Sagar Nandy, Web Developer, Portfolio, Backend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></Script>

     

      <Navbar/>
      <Hero/>
     
     <WhatIdo/>
     <Testimonials/>
     <Footer/>
   </div>
  )
}
