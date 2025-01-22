import ClientLayout from '@/lib/client-layout';
import StyledComponentsRegistry from '@/lib/styled-components-registry';
import { Open_Sans, Montserrat } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-open-sans',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['900'], // peso específico para os headings
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Your App Title',
  description: 'Your app description goes here.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${openSans.variable} ${montserrat.variable}`}
    >
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
