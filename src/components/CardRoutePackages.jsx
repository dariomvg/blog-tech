"use client"
import "@/styles/card-package.css";
import generateRandomColor from "@/utils/generateColor";
import { useEffect, useState } from "react";

export const CardRoutePackages = ({item}) => {

  const {title, text, link} = item; 
  const [borderColor, setBorderColor] = useState(null);

  useEffect(() => {
    setBorderColor(generateRandomColor());
  }, []);

  return (
    <div className="card-route-paquete" style={{border: borderColor ? `1px solid ${borderColor}` : ''}}>
      <h2 className="title-paquete">{title}</h2>
      <p className="text-paquete">{text}</p>
      <a href={link} target="_BLANK" className="link-paquete">Ver más</a>
    </div>
  )
}
