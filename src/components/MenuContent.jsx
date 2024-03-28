"use client";
import imgFlecha from "@/assets/icons/all-icons/icon-down.svg";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "@/styles/menu-content.css";

export default function MenuContent() {
  const [isOpen, setIsOpen] = useState(false);
  const currentPage = usePathname();

  const openAside = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={`aside-links ${isOpen ? "open" : ""}`}>
      <div className="cont-title">
        <h2 className="title-categories">Categorias</h2>
        <Image
          src={imgFlecha}
          alt="imagen de flecha"
          className="img-flecha"
          width={20}
          height={20}
          onClick={openAside}
          loading="lazy"
        />
      </div>
      <div className="list-link">
        <Link
          href="/content/courses"
          className={`link-category ${
            currentPage === "/content/courses" ? "active" : ""
          }`}>
          Cursos
        </Link>
        <Link
          href="/content/articles"
          className={`link-category ${
            currentPage === "/content/articles" ? "active" : ""
          }`}>
          Artículos
        </Link>
        <Link
          href="/content/topics"
          className={`link-category ${
            currentPage === "/content/topics" ? "active" : ""
          }`}>
          Temas
        </Link>
        <Link
          href="/content/packages"
          className={`link-category ${
            currentPage === "/content/packages" ? "active" : ""
          }`}>
          Paquetes
        </Link>
        <Link
          href="/content/networks"
          className={`link-category ${
            currentPage === "/content/networks" ? "active" : ""
          }`}>
          Redes
        </Link>
        <Link
          href="/"
          className="link-category">
          Principal
        </Link>
      </div>
    </section>
  );
}
