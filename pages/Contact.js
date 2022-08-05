import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Footer from '../components/Footer'



const contact = () => {
  return (
    <div>
      <Head>
        <title>Sagar - Contact Me </title>  
        <meta title='Sagar Nandy | Junior Web Developer - https://nandysagar.in'/> 
        <meta name="description" content=" Sagar Nandy, Web Developer, Portfolio, Backend Developer" />
        <link rel="icon" href="/favicon.ico" />
       
       
      </Head>
      <Navbar/>


      <div className="mt-20 ">
      <h1 className="text-teal-500 text-4xl lg:text-8xl font-bold text-center mb-4 md:mb-6" >
        <i className='fa fa-phone-square'></i> Contact With Me
      

        </h1>
       
      </div>

    {/* contact form start */}

    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14722.369924269535!2d88.74453522194415!3d22.706209556555457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8ab7e9421f8e5%3A0x92918a3604a1ccad!2sNadia%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1659258948397!5m2!1sen!2sin" ></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Nadia, West Bengal</p>
       

        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-green-500 leading-relaxed">hello@nandysagar.in</a>
          {/* <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">123-456-7890</p> */}
        </div>
        <h2 className="title-font font-semibold text-red-600 tracking-widest px-6 mt-1">For any query feel free to contact with me.</h2>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Please fill the form with correct details</p>
      <form action="https://formspree.io/f/mlezgpkl" method="POST">
      <div className="relative mb-4">
      <label htmlFor='fname' className='leading-7 text-sm text-gray-600'>First Name</label>
        <input type="text" id="fname" name="Firstname" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
      </div>

      <div className="relative mb-4">
      <label htmlFor="lname" className="leading-7 text-sm text-gray-600">Last Name</label>
       <input type="text" id="lname" name="Lastname" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
     </div>
     <div className="relative mb-4">
      <label htmlFor="mob" className="leading-7 text-sm text-gray-600">Mobile Number</label>
       <input type="number" id="mob" name="Mobile" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
     </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="Email" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
      </div>
      <div className="relative mb-4">
        <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
        <input type="text" id="city" name="City" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
      </div>
      <div className="relative mb-4">
        <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
        <input type="text" id="state" name="State" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
      </div>
      <div className="relative mb-4">
        <label htmlFor="zip" className="leading-7 text-sm text-gray-600">Zip Code</label>
        <input type="number" id="zip" name="ZipCode" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="Message" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
      </div>
      <button type='submit' className="text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded-full text-lg">Submit</button>

      </form>
        
      
      <p className="text-xs text-red-500 mt-3">PLEASE NOTE : All fields are mandatory to submit the form.</p>
      
    </div>
  </div>
</section>

<Footer/>


    </div>
  )
}

export default contact