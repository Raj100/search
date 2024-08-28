'use client';

import type { Metadata } from "next";
import { Provider } from "react-redux";
import { Inter } from "next/font/google";
import "./globals.css";
import { store } from "../redux/store";


const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Search for cities",
//   description: "This is a city searching application",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
    </Provider>
  );
}
