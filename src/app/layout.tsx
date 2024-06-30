import "./globals.css";
import { Sidebar, Footer } from "@/components/layout";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
        <Sidebar />
        <div className="lg:p-2 bg-gray-100 flex-1 overflow-y-auto">
          <div className="flex flex-col justify-between bg-background min-h-screen lg:rounded-xl border border-transparent lg:border-border overflow-y-auto">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
