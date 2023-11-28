import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar/Navbar";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-sb-darkblue text-white`}>
        <Navbar />
        <div className=""> {children} </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
