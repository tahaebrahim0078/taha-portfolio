import type { Metadata } from "next";
import "./globals.css";
import Background from "./components/background/page";

export const metadata: Metadata = {
  title: "Taha Ibrahim - Full Stack MERN Developer",
  description:
    "Full Stack MERN Developer passionate about building scalable, modern web applications using MongoDB, Express, React, and Node.js.",
  icons: {
    icon: {
      url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%23000000'/><text x='50' y='65' font-size='55' text-anchor='middle' fill='%23ffffff' font-family='Arial Black, sans-serif'>T</text></svg>",
      type: "image/svg+xml",
    },
    shortcut:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%23000000'/><text x='50' y='65' font-size='55' text-anchor='middle' fill='%23ffffff' font-family='Arial Black, sans-serif'>T</text></svg>",
    apple:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%23000000'/><text x='50' y='65' font-size='55' text-anchor='middle' fill='%23ffffff' font-family='Arial Black, sans-serif'>T</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Background />
        {children}
      </body>
    </html>
  );
}
