"use client"

import React from "react";
import Footer from "./components/Footer";
import "./styles/global.css"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <title>My App</title>
                <meta name="description" content="AdSpark" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                {children}
                <Footer />
            </body>
        </html>
    )
}