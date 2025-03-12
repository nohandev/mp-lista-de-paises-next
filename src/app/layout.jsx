import '@/app/globals.css'

import Navbar from '@/app/ui/navbar';

import { nunitoSans } from '@/app/ui/fonts';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <title>Lista de países</title>
      </head>
      <body 
      className={`${nunitoSans.className} bg-zinc-900 min-h-screen aliased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
