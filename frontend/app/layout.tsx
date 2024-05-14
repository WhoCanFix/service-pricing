import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WhoCanFix Service Prices",
  description: "Services prices for WhoCanFix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={`/css/variables/variables.base.css`} />
        <link rel="stylesheet" href={`/css/fonts/base.css`} />
      </head>

        <body>{children}</body>
    </html>
  );
}
