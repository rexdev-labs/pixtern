import "../styles/globals.css";
import { Provider } from "@/components/ui/provider"
import Navbar from "@/components/Navbar/NavBar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pixtern",
  description: "Website Pixtern",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
