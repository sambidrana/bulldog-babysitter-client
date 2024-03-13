import Navbar from "@/app/(components)/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "./(components)/Footer";
import Head from 'next/head';

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          footer: "hidden",
        },
      }}
    >
      <head>
        <link className="rounded-full" rel="icon" href="/logo/logo1.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>The Bulldog Babysitter</title>
      </head>
      <html lang="en">
        <body className={roboto.className}>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
