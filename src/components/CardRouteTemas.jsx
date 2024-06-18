"use client"
import generateRandomColor from "@/utils/generateColor";
import "../styles/card-topic.css";
import { useEffect, useState } from "react";

export const CardRouteTemas = ({ item }) => {
  const { title, text, link } = item;
  const [borderColor, setBorderColor] = useState(null);

  useEffect(() => {
    setBorderColor(generateRandomColor());
  }, []);
  return (
    <div className="card-route-tema" style={{border: borderColor ? `1px solid ${borderColor}` : ''}}>
        <h2 className="title-tema">{title}</h2>
        <p className="text-tema">{text}</p>
        <a href={link} target="_BLANK" className="link-tema">
          Ver más
        </a>
      
    </div>
  );
};
