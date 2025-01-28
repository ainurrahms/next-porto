import { ReactNode } from 'react';
import ClientLayout from './client-layout';
import '../assets/styles/global.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="m-0 mx-auto min-h-full max-w-2xl bg-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
