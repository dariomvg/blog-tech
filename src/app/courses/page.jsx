"use client";
import { CardRouteCurso } from "@/components/CardRouteCurso";
import { cursos } from "@/utils/data-courses";
import "./courses.css";
import { useState } from "react";

export default function Courses() {
  const [curso, setCurso] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setCurso(value);
    setSearchTerm(value);
  };

  const cambioCursos = cursos.filter((item) => {
    const resCurso = searchTerm === "" || item.name.includes(searchTerm);
    return resCurso;
  });

  return (
    <section className="container-courses">
      <section className="section-filters">
        <h1 className="title-courses">Cursos</h1>

        <input
          type="text"
          name="curso"
          value={curso}
          placeholder="Busca curso"
          onChange={(e) => handleSearch(e.target.value)}
          className="input"
        />
      </section>

      <section className="all-courses">
        {cambioCursos &&
          cambioCursos.map((item) => (
            <CardRouteCurso key={item.id} item={item} />
          ))}
      </section>
    </section>
  );
}
