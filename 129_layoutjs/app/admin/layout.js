import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Foot from "./components/Foot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin: Admin Center of App",
  description: "Admin:IT is Admin Center of Application there admin cal login,logout and his all features are available",
};

export default function RootLayout({ children }) {
  return (
    //not returning html page
    <>
    <span>Admin Navbar</span>
    {children}
    </>
    // <html lang="en">
    //   <body
    //     className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    //   >
    //     <Navbar/>
        
    //     {children}
    //     <Foot/>
        
    //   </body>
    // </html>
  );
}
