import Image from "next/image";
import imgSearch from "@/assets/images/image-search.svg";
import "./landing.css";

export default function RouteLanding() {
  return (
    <section className="section-routes-landing">
      <div>
        <h1 className="title-search">Busca cursos, temas y más...</h1>
        <Image
          src={imgSearch}
          alt="image search"
          width={400}
          height={300}
          loading="lazy"
        />
      </div>
    </section>
  );
}
