import "./globals.css";
import { Inter } from "next/font/google";
import "@fontsource/ibm-plex-mono";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "A1 Protocol",
  description: "Institutional Strategy Console",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
      <body className="bg-black text-white font-mono h-full flex flex-col">
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}