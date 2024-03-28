import { Header } from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "BlogTech - cursos, artículos, paquetes, temas de interes",
  description: "Blog que muestra cursos, temas, artículos y más sobre desarrollo y programación que te ayudarán en tu camino de aprendizaje",
  icons: {
    icon: "/icon.png"
  }

}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="wrapper-app">
        <Header />
        {children}
      </body>
    </html>
  );
}
