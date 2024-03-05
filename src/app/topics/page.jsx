
import { CardRouteTemas } from "@/components/CardRouteTemas";
import { temas } from "@/utils/data-topics";
import "./topics.css"; 

export default function Topics () {
  return (
    <section className="container-temas">
      <h1 className="title-temas">Temas</h1>

      <section className="all-topics">
          {temas && 
            temas.map((item) => <CardRouteTemas key={item.id} item={item} /> )
          }
      </section>
    </section>
  )
}
