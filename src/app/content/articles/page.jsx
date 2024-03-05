import { CardRouteArticles } from "@/components/CardRouteArticles";
import { articulos } from "@/utils/data-articles";
import "./articles.css";

export default function RouteContentArticles () {
  return (
    <section className="section-routes-articles">
        {articulos && articulos.map((item) => <CardRouteArticles key={item.id} item={item} />)}
    </section>
  )
}
