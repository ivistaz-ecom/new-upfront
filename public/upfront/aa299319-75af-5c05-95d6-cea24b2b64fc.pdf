import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script'
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
      <body >{children}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous" defer rel="preconnect"></Script>
          {/* Start Google Analytics Manager */}
          <Script
        strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-1T8B6DDNF6`}
          rel="preconnect"
      />

        <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-1T8B6DDNF6');
        `}
        </Script>
        {/* End Google Analytics Manager */}


        {/* Google Tag Manager (noscript) */}
        <Script id="google-tag-manager-start">
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MTXQQBH');
        `}
      </Script>


       <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MTXQQBH"
          height="0"
          width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            rel="preconnect"
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      </body>
    </html>
  )
}