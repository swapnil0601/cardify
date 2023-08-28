// "use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import { Providers } from "./redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cardify",
  description: "Spaced Repetition Web-App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" metadata={metadata}>
      <body className={inter.className}>
        <div id="portal"></div>
        <Providers>
          <div className="sticky top-0 z-50 bg-base-100 shadow-md">
            <Navbar />
          </div>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
