"use client"
import Image from "next/image";
import "../styles/card-course.css";
import generateRandomColor from "@/utils/generateColor";
import { useEffect, useState } from "react";

export const CardRouteCurso = ({ item }) => {
  const { title, autor, text, icon, link, docs } = item;
  const [borderColor, setBorderColor] = useState(null);

  useEffect(() => {
    setBorderColor(generateRandomColor());
  }, []);
  
  return (
    <div className="card-route-curso" style={{border: borderColor ? `1px solid ${borderColor}` : ''}}>
        <div className="details-curso">
          <h2 className="title-curso">{title}</h2>
          {icon ? (
            <Image
              src={icon}
              alt={title}
              width={30}
              height={30}
              className="icon-curso"
              loading="lazy"
            />
          ) : null}
        </div>
        <p className="autor-curso"><b>Autor:</b> {autor}</p>
        <p className="text-curso">{text}</p>
        <div className="links-curso">
          <a href={docs} target="_BLANK" className="link-curso">
            Documentación
          </a>
          <a href={link} target="_BLANK" className="link-curso">
            Curso
          </a>
        </div>
    </div>
  );
};
