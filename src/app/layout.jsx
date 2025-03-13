import '@/app/globals.css'

import Navbar from '@/app/ui/home/navbar';

import { nunitoSans } from '@/app/ui/fonts';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel='icon' href='/favicon.ico'/>
        <title>| Lista de países</title>
      </head>
      <body 
      className={`${nunitoSans.className} bg-slate-950 min-h-screen aliased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
