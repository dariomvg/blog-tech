import { useState } from "react";

export const useFilters = (cursos) => {
  const [nameCourse, setNameCourse] = useState("all");

  const cambioCursos = cursos.filter((curso) => {
    const resCurso = nameCourse === "all" || curso.name === nameCourse;
    return resCurso;
  });

  return { cambioCursos, setNameCourse };
};
