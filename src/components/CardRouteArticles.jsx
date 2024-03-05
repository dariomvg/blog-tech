import "@/styles/card-article.css";

export const CardRouteArticles = ({ item }) => {
  const { title, text, link } = item;
  return (
    <div className="card-route-articulo">
      <h2 className="title-art">{title}</h2>
      <p className="text-art">{text}</p>
      <a href={link} target="_BLANK" className="link-articulo">
        Ver Más
      </a>
    </div>
  );
};
