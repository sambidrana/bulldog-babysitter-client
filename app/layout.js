import Navbar from "@/app/(components)/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Roboto } from 'next/font/google'
import { auth } from '@clerk/nextjs'


const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  const {userId} = auth()

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>
          <Navbar userId={userId} />
          <div className="">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
