import "../styles/globals.css";

import { Provider } from "@/components/ui/provider";
import { GlobalDataProvider } from "@/components/provider/GlobalDataProvider";
import { fetchGlobalData } from "@/utils/fetchData";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { data: globalData } = await fetchGlobalData();

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Provider>
          <GlobalDataProvider value={globalData}>
            {children}
          </GlobalDataProvider>
        </Provider>
      </body>
    </html>
  );
}
