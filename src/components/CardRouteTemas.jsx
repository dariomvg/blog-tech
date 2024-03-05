import Image from "next/image";
import "../styles/card-topic.css";

export const CardRouteTemas = ({ item }) => {
  const { image, title, text, link } = item;
  return (
    <div className="card-route-tema">
      <Image
        src={image}
        alt="image"
        className="img-tema"
        width={"100%"}
        height={170}
        loading="lazy"
      />
      <div className="details-tema">
        <h2 className="title-tema">{title}</h2>
        <p className="text-tema">{text}</p>
        <a href={link} target="_BLANK" className="link-tema">
          Ver más
        </a>
      </div>
    </div>
  );
};
