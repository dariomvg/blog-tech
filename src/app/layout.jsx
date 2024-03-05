import { Header } from "@/components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="wrapper-app">
        <Header />
        {children}
      </body>
    </html>
  );
}
