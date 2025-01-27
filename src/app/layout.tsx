import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHadDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHadDisplay.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
