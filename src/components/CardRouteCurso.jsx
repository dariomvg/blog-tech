import Image from "next/image";
import "../styles/card-course.css";

export const CardRouteCurso = ({ item }) => {
  const { image, title, autor, text, icon, link, docs } = item;

  return (
    <div className="card-route-curso">
      <Image
        src={image}
        alt={title}
        className="img-curso"
        width={300}
        height={170}
        loading="lazy"
      />
      <section className="container-todo">
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
      </section>
    </div>
  );
};
