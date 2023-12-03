import Navbar from "@/app/(components)/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Roboto } from 'next/font/google'


const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>
          <Navbar />
          <div className="">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
