
'use client';
import './globals.css'
import { initFlowbite } from 'flowbite'
import { useEffect } from 'react';
import Script from 'next/script';


export default function RootLayout({ children }) {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <html lang="en">
      <head>
      {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
     */}
      </head>
      <body className="bg-gray-100">
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></Script>
      </body>
    </html>
  )
}
