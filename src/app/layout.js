import { Inter } from "next/font/google";
import "./globals.css";
import dotenv from 'dotenv';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'E-commerce | Martín Salazar',
  description: "A E-commerce development with NextJs.",
};

export default function RootLayout({ children }) {
  dotenv.config();

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
