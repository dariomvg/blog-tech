"use client"
import iconArrow from "../assets/icons/icon-arrow.png";
import imgFondo from "../assets/images/mockup.svg";
import { Typewriter } from "react-simple-typewriter";
import { cursos } from "@/utils/data-courses";
import { temas } from "@/utils/data-topics";
import { paquetes } from "@/utils/data-packages";
import { CardRouteCurso } from "@/components/CardRouteCurso";
import { CardRouteTemas } from "@/components/CardRouteTemas";
import { CardRoutePackages } from "@/components/CardRoutePackages";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import "./main.css";
import { words } from "@/utils/words";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container-home">
      <section className="cont-home">
        <div className="box-home">
          <h1 className="title-home">
            Blog sobre programación y desarrollo web
          </h1>
          <div className="efects_titles">
            <Typewriter
              words={words}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={3000}
            />
          </div>

          <p className="text-home">
            En este blog aprenderás sobre las tecnologías que demandan, como
            lenguajes de programación, frameworks, dependencias, etc. Además de
            recursos de ayuda como artículos y temas relacionados.
          </p>
        </div>
        <Image src={imgFondo} alt="imagen principal de inicio" className="mockup" width="600" height="400" loading="lazy" />
      </section>

      <section className="cont-details">
        <h2 className="subtitle-home">Algunas secciones dentro del blog</h2>

        <section className="container-cards">
          <h2 className="title-container">Cursos</h2>
          <div className="list-cards">
            {cursos &&
              cursos
                .slice(0, 3)
                .map((item) => <CardRouteCurso key={item.id} item={item} />)}
          </div>

          <Link href="/courses" className="link-more">
            Ver todo
            <Image
              src={iconArrow}
              alt="image arrow"
              width={20}
              height={20}
              loading="lazy"
            />
          </Link>
        </section>

        <section className="container-cards">
          <h2 className="title-container">Temas</h2>
          <div className="list-cards">
            {temas &&
              temas
                .slice(0, 3)
                .map((item) => <CardRouteTemas key={item.id} item={item} />)}
          </div>

          <Link href="/topics" className="link-more">
            Ver todo
            <Image
              src={iconArrow}
              alt="image arrow"
              width={20}
              height={20}
              loading="lazy"
            />
          </Link>
        </section>
        <section className="container-cards">
          <h2 className="title-container">Paquetes y dependencias útiles</h2>
          <div className="list-cards">
            {paquetes &&
              paquetes
                .slice(0, 3)
                .map((item) => <CardRoutePackages key={item.id} item={item} />)}
          </div>

          <Link href="/content/packages" className="link-more">
            Ver todo
            <Image
              src={iconArrow}
              alt="image arrow"
              width={20}
              height={20}
              loading="lazy"
            />
          </Link>
        </section>

        <section className="cont-info">
          <h1 className="title-info">Explora más...</h1>
          <p className="text-info">
            Míra todas las secciones que te ofrece este blog
          </p>
          <Link href="/content" className="link-info">
            Contenido
          </Link>
        </section>
      </section>
      <Footer />
    </main>
  );
}
