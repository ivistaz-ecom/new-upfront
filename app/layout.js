import Footer from "@components/Footer";
import "../styles/globals.css";
import Script from "next/script";

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>

        {/* Start Google Analytics Manager */}
        {/* <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-BSMPS1KP12'`}
        />

        <Script strategy="afterInteractive" id="google-analytics">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-BSMPS1KP12'');
      `}
        </Script> */}

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-M01WXG55F8"
        ></Script>
        <Script>
          {`
     window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-M01WXG55F8');`}
        </Script>
        {/* End Google Analytics Manager */}

        {/* Google Tag Manager (noscript) */}
        <Script id="google-tag-manager-start">
          {`
        >(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MTXQQBH');
        
      `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTXQQBH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Footer />
      </body>
    </html>
  );
}
