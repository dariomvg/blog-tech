import { paquetes } from "@/utils/data-packages";
import "./packages.css";
import { CardRoutePackages } from "@/components/CardRoutePackages";


export default function RouteContentPackeges ()  {
  return (
    <section className="section-routes-packages">
        {paquetes && paquetes.map((item) => <CardRoutePackages key={item.id} item={item} />)}
    </section>
  )
}
