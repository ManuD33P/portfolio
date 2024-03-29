import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import SessionAuthProvider from '@/app/context/SessionAuthProvider'

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{
       <SessionAuthProvider>{children}</SessionAuthProvider>
      }</body>
    </html>
  );
}
