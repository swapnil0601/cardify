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

  const usedTheme = localStorage.getItem("theme") || "light";

  const themeHandler = () => {
    // Save theme in local storage
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <html lang="en" data-theme={usedTheme}>
      <body className={inter.className}>
        <Providers>
          <div className="sticky top-0 z-50 bg-base-100 shadow-md">
            <Navbar themeHandler={themeHandler} theme={theme} />
          </div>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
