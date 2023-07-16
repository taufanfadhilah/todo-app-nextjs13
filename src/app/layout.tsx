import type { Metadata } from "next";
import { Inter } from "next/font/google";

// components
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";

// styles
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Tracker",
  description: "Stay organized and boost your productivity with Task Tracker.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="max-w-[1280px] mx-auto mt-40 px-10">{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
