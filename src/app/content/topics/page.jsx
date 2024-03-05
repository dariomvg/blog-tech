import { temas } from "@/utils/data-topics";
import { CardRouteTemas } from "@/components/CardRouteTemas";
import "@/app/topics/topics.css";

export default function RouteContentTopics()  {
  return (
    <section className="section-routes-topics">
      {temas &&
        temas.map((item) => <CardRouteTemas key={item.id} item={item} />)}
    </section>
  );
};
