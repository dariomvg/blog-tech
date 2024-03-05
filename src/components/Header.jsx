"use client";
import { useState } from "react";
import imgMenu from "../assets/icons/all-icons/menu.svg";
import Link from "next/link";
import "../styles/header.css";
import Image from "next/image";

const handleTest = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return { isOpen, handleMenu };
};

export const Header = () => {
  const { isOpen, handleMenu } = handleTest();

  return (
    <header className={`header ${isOpen ? "open" : ""}`}>
      <Link href="/" className="logo">
        Blog
      </Link>
      <Image
        src={imgMenu}
        alt="imagen de menu"
        className="img-menu"
        width={40}
        height={40}
        loading="lazy"
        onClick={handleMenu}
      />
      <nav className="navbar">
        <Link href="/content" className="nav-link">
          Contenido
        </Link>
        <Link href="/about-me" className="nav-link">
          Sobre mí
        </Link>
        <Link href="/topics" className="nav-link">
          Temas
        </Link>
        <Link href="/courses" className="nav-link">
          Cursos
        </Link>
        <Link href="/next-study" className="nav-link">
          Próximo
        </Link>
      </nav>
    </header>
  );
};
