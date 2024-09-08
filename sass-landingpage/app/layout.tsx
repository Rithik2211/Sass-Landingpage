import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import {twMerge} from 'tailwind-merge';

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sass landing Page",
  description: "Created by Rithik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(dmsans.className, "antialized bg-[#EAEEFE]")}>{children}</body>
    </html>
  );
}
