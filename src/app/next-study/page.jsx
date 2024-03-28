import "./nextStudy.css";

export default function NextStudy() {
  return (
    <section className="container-study">
      <h3 className="title-study">Tecnologias/temas para aprender:</h3>
      <div className="list-tech">
        <a href="https://www.docker.com/" target="_BLANK" className="link-tech">
          Docker
        </a>
        <a href="https://jestjs.io/" target="_BLANK" className="link-tech">
          jest
        </a>
        <a href="https://testing-library.com/docs/react-testing-library/intro/" target="_BLANK" className="link-tech">
          testing library
        </a>
        <a href="https://vitest.dev/" target="_BLANK" className="link-tech">
          vitest
        </a>
        <a
          href="https://www.patterns.dev/"
          target="_BLANK"
          className="link-tech">
          Patrones de diseño
        </a>
      </div>
    </section>
  );
}
