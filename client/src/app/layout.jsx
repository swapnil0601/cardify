"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import { Providers } from "./redux/provider";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cardify",
  description: "Spaced Repetition Web-App",
};

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("light");
  const usedTheme = theme === "light" ? "light" : "dark";
  const themeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <html lang="en" data-theme={usedTheme}>
      <body className={inter.className}>
        <div id="portal" />
        <Providers>
          <Navbar themeHandler={themeHandler} theme={theme} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
