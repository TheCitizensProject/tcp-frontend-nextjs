import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Citizen Project",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>{children}</body>
      {process.env.NODE_ENV !== 'development' 
        && <Script disable-devtool-auto src='https://cdn.jsdelivr.net/npm/disable-devtool'/>}
    </html>
  );
}
