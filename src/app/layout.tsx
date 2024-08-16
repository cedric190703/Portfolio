import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio",
    description: "This is my portfolio website",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <meta property="og:image" content="portfolio.png" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://portfolio-cedric-brzyski.vercel.app/" />
            <link rel="icon" href="/icons/icon.png" />
        </head>
        <body className={inter.className}>{children}</body>
        </html>
    );
}
