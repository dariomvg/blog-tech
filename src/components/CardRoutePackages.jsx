import "@/styles/card-package.css";

export const CardRoutePackages = ({item}) => {

  const {title, text, link} = item; 

  return (
    <div className="card-route-paquete">
      <h4 className="title-paquete">{title}</h4>
      <p className="text-paquete">{text}</p>
      <a href={link} target="_BLANK" className="link-paquete">Más información</a>
    </div>
  )
}
