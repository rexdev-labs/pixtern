import "../styles/globals.css";
import { Provider } from "@/components/ui/provider"

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
