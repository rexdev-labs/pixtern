import type { Metadata } from 'next';
import '../styles/globals.css';
import ProvidersWrapper from './providers-wrapper';

export const metadata: Metadata = {
  title: 'Pixtern',
  description: 'Website Pixtern',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ProvidersWrapper>{children}</ProvidersWrapper>
      </body>
    </html>
  );
}