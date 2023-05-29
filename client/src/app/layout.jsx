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
    <html lang="en">
      <body className={inter.className}>
        <div id="portal" />
        <Providers>
          <div className="shadow-md">
            <Navbar />
          </div>
          {/* <div className="divider my-1 mx-24"></div> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
