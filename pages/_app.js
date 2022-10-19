import Router from 'next/router'; 
import '../styles/globals.css';
import '../styles/nprogress.css';
import nProgress from 'nprogress';
import Script from 'next/script';
import { NextSeo } from 'next-seo';



Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);

Router.events.on('routeChangeComplete', nProgress.done);



//() => {

 // console.log("route change");
  
//}


function MyApp({ Component, pageProps }) {
  return <>



<NextSeo
      title="Sagar Nandy | Junior Web Developer - https://nandysagar.in/ "
      description="Sagar Nandy - A junior web developer, who loves to design and develop beautiful web application."
      canonical="https://nandysagar.in/"
      openGraph={{
        url: 'https://nandysagar.in/',
        title: 'Sagar Nandy | A Junior Web Developer - https://nandysagar.in/ ',
        description: 'A junior web developer, who loves to design and develop beautiful web application.',
        images: [
          {
            url: 'Images/sg6.png',
            width: 800,
            height: 600,
            alt: 'Sagar Nandy - https://nandysagar.in/ ',
            type: 'image/jpeg/png',
          },
         
        ],
        site_name: 'Personal Portfolio website of Sagar Nandy - https://nandysagar.in/ ',
      }}
      twitter={{
        handle: '@SagarNandy7',
        site: '@SagarNandy7',
        cardType: 'summary_large_image',
      }}
    />
     
 <Script strategy="lazyOnload" id="gtag" async src={`https://www.googletagmanager.com/gtag/js?id=G-85ZR9XPNTG1`}></Script>
 <Script strategy="lazyOnload" id=" disBledKey ">
  {`
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());
 
   gtag('config', 'G-85ZR9XPNTG');
   `
  }
 </Script>
 <Script strategy='lazyOnload' src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></Script>
 <Script strategy='lazyOnload'>
 
 {`
document.addEventListener("contextmenu", function(event){
    event.preventDefault();
    swal("Right Click is Disabled By Administrator.","","warning");    
    }, false);


    document.onkeydown = function (e) {
  
        // disable F12 key
        if(e.keyCode == 123) 
        {
            swal(" F12 Key is Disabled By Administrator.","","warning"); 
            return false;
        }
 
        // disable I key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
            swal(" CTRL+SHIFT+I Key is Disabled By Administrator.","","warning"); 
            return false;
        }
 
        // disable J key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            swal(" CTRL+SHIFT+J Key is Disabled By Administrator.","","warning"); 
            return false;
        }
 
        // disable U key
        if(e.ctrlKey && e.keyCode == 85) {
            swal(" CTRL+U Key is Disabled By Administrator.","","warning"); 
            return false;
        }
        // disable F3 key
        if(e.ctrlKey  && e.shiftKey && e.keyCode == 114) {
            swal(" F3 Key is Disabled By Administrator.","","warning"); 
            return false;
        } 
        // disable R key
        if(e.ctrlKey  && e.shiftKey && e.keyCode == 82) {
            swal(" CTRL+SHIFT+R Key is Disabled By Administrator.","","warning"); 
            return false;
        }
        if(e.ctrlKey && e.keyCode == 82) {
            swal(" CTRL+R Key is Disabled By Administrator.","","warning"); 
            return false;
        }
        //f5 disable
        if(e.keyCode == 116) {
            swal(" F5 Key is Disabled By Administrator.","","warning"); 
            return false;
        }
        //A disable 
        if(e.ctrlKey && e.keyCode == 65) {
            swal(" CTRL+A Key is Disabled By Administrator.","","warning"); 
            return false;
        }

        // Copy disable 
        if(e.ctrlKey && e.keyCode == 67) {
            swal(" CTRL+C Key is Disabled By Administrator.","","warning"); 
            return false;
        }
        
    }


`}

 </Script>
  <Component {...pageProps} />
   </>
}

export default MyApp
