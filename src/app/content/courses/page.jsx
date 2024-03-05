import { CardRouteCurso } from "@/components/CardRouteCurso";
import { cursos } from "@/utils/data-courses";
import "./courses.css";

export default function RouteContentCourses () {
  return (
    <section className="section-routes-courses">
      {cursos &&
        cursos.map((item) => <CardRouteCurso key={item.id} item={item} />)}
    </section>
  );
};
