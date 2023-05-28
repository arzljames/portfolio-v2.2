"use client";
import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "Arzl James Lao",
  description: "Digital portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
