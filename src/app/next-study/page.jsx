import "./nextStudy.css";

export default function NextStudy() {
  return (
    <section className="container-study">
      <h3 className="title-study">Tecnologias/temas para aprender:</h3>
      <div className="list-tech">
        <a href="https://nextjs.org/" target="_BLANK" className="link-tech">
          Next.js
        </a>
        <a href="https://astro.build/" target="_BLANK" className="link-tech">
          Astro
        </a>
        <a href="https://supabase.com/" target="_BLANK" className="link-tech">
          Supabase
        </a>
        <a
          href="https://www.patterns.dev/"
          target="_BLANK"
          className="link-tech">
          Patrones de diseño
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_BLANK"
          className="link-tech">
          TailwindCSS
        </a>
      </div>
    </section>
  );
}
