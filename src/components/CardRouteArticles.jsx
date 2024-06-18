"use client"
import "@/styles/card-article.css";
import generateRandomColor from "@/utils/generateColor";
import { useEffect, useState } from "react";

export const CardRouteArticles = ({ item }) => {
  const { title, text, link } = item;
  const [borderColor, setBorderColor] = useState(null);

  useEffect(() => {
    setBorderColor(generateRandomColor());
  }, []);
  return (
    <div className="card-route-articulo" style={{border: borderColor ? `1px solid ${borderColor}` : ''}}>
      <h2 className="title-art">{title}</h2>
      <p className="text-art">{text}</p>
      <a href={link} target="_BLANK" className="link-articulo">
        Ver Más
      </a>
    </div>
  );
};
