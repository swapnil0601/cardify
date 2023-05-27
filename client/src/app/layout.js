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
        <Providers>

          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
