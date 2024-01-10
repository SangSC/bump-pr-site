import { PT_Serif, Montserrat } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// context provider
import NavContextProvider from "@/context/NavContext";

const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pt-serif",
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "BUMP OF CHICKEN PR Site",
  description: "Unofficial Bump of Chicken promotional site.",
};

export default function RootLayout({ children }) {
  return (
    <NavContextProvider>
      <html lang="en">
        <body
          className={`${ptSerif.variable} ${montserrat.variable} overflow-x-hidden relative`}
        >
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </body>
      </html>
    </NavContextProvider>
  );
}
