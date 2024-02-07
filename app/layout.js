import Navbar from "@/app/(components)/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "./(components)/Footer";

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
      <html lang="en">
        <body className={roboto.className}>
          
          <Navbar />
          <div className="">{children}</div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
