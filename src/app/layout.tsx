import './globals.css';

import { Inter, Noto_Sans, Poppins } from 'next/font/google';

import clsx from 'clsx';

// "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
const googleFont = Noto_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={clsx(googleFont.className, 'bg-primary-100')}>
        {children}
      </body>
    </html>
  );
}
