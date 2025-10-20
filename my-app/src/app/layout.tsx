import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Providers from "./providers";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ComfyGo",
  description: "Discover and book your hotel — fast, simple, and comfy",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
       <html lang="en">
         <body className={inter.className}>
           <Providers>
              <Navbar />
              <main className='container py-10'>{children}</main>
           </Providers>
         </body>
       </html>
    </ClerkProvider>
  );
}
