import './globals.css';
import { abhayaLibre } from './fonts';
import Logo from "@/public/RajRasaLogo.png";
import Script from 'next/script'

export const metadata = {
  title: 'Rajrasa - Royal Rajasthani Dining Experience',
  description: 'Delve into the Rajasthani culinary experience by Chef Saurabh',
  icons: {
    icon: Logo.src,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={abhayaLibre.variable}>
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M8QM8JZK');`}
        </Script>
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-G74ZM25NBS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G74ZM25NBS');
          `}
        </Script>
        <Script async src="//www.instagram.com/embed.js"></Script>
      </head>
      <body>
      <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-M8QM8JZK"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}