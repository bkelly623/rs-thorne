// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import "./styles/animations.css";
import Navigation from './components/Navigation';
import AnimationInitializer from './scripts/animations';

export const metadata: Metadata = {
  title: "R.S. Thorne | Dark Erotic Monster Romance",
  description: "Enter a world where passion knows no bounds. Bestselling dark monster romance books by R.S. Thorne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AnimationInitializer />
        <Navigation />
        <div className="page-content">
          {children}
        </div>
        <footer className="footer">
          <div className="footer-content">
            <p className="copyright">© {new Date().getFullYear()} R.S. Thorne. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}