import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { lazy } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'E-commerce | Martín Salazar',
  description: "A E-commerce development with NextJs.",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com" rel='preload' />
        <link href="https://fonts.gstatic.com" crossOrigin={"true"} rel='preload' />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100&display=swap" rel="preload" as='stylesheet' />
      </head>
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
