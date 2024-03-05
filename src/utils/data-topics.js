import imgDeclarativa from "../assets/images/images-topics/img-declarativa.png";
import imgEventos from "../assets/images/images-topics/img-eventos.png";
import imgFuncional from "../assets/images/images-topics/img-funcional.png";
import imgIa from "../assets/images/images-topics/img-ia.png";
import imgMicroserv from "../assets/images/images-topics/img-microserv.png";
import imgMvc from "../assets/images/images-topics/img-mvc.png";
import imgObserver from "../assets/images/images-topics/img-observer.png";
import imgPoo from "../assets/images/images-topics/img-poo.png";
import imgScrum from "../assets/images/images-topics/img-scrum.png";
import imgSeguridad from "../assets/images/images-topics/img-seguridad.png";
import imgServeless from "../assets/images/images-topics/img-serveless.png";
import imgSingleton from "../assets/images/images-topics/img-singleton.png";
import imgTdd from "../assets/images/images-topics/img-tdd.png";
import imgLogica from "../assets/images/images-topics/img-logica.png";
import imgPatterns from "../assets/images/images-topics/img-patterns.png";

export const temas = [
  {
    id: 1,
    image: imgPoo,
    title: "Programación Orientada a Objetos",
    text: "Paradigma que organiza el código en objetos que contienen datos y métodos, facilitando la encapsulación y la reutilización de código.",
    link: "https://www.ibm.com/docs/es/spss-modeler/saas?topic=language-object-oriented-programming",
  },

  {
    id: 2,
    image: imgMicroserv,
    title: "Arquitectura de Microservicios",
    text: "Estructura arquitectónica que divide una aplicación en servicios independientes y autosuficientes.",
    link: "https://youtu.be/2sFczigWppk?si=NePtRSdpUwD3whnH",
  },
  {
    id: 3,
    image: imgObserver,
    title: "Patron Observer",
    text: "Patrón que define una dependencia uno a muchos entre objetos, de modo que cuando un objeto cambia de estado, todos sus dependientes son notificados y actualizados automáticamente.",
    link: "https://www.patterns.dev/vanilla/observer-pattern",
  },

  {
    id: 4,
    image: imgFuncional,
    title: "Programación Funcional",
    text: "Paradigma de programación que trata la computación como la evaluación de funciones matemáticas y evita el cambio de estado y datos mutables.",
    link: "https://openwebinars.net/blog/que-es-la-programacion-funcional-y-sus-caracteristicas/",
  },
  {
    id: 5,
    image: imgDeclarativa,
    title: "Programción Declarativa",
    text: "Paradigma que se centra en describir el qué se quiere lograr, en lugar de cómo lograrlo. Incluye programación funcional y lógica.",
    link: "https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/programacion-declarativa/",
  },
  {
    id: 6,
    image: imgServeless,
    title: "Arquitectura Serveless",
    text: "Modelo de ejecución en la nube donde el proveedor gestiona automáticamente la infraestructura y los recursos, permitiendo a los desarrolladores centrarse en el código.",
    link: "https://youtu.be/CuI-3ZlMw6Q?si=LNeeoxVS8OE6OAZo",
  },
  {
    id: 7,
    image: imgMvc,
    title: "Patron MVC",
    text: " 'Model-View-Controller' Patrón que separa la lógica de negocio (Model), la presentación (View) y la manipulación de la entrada (Controller).",
    link: "https://youtu.be/ev3Yxva4wI4?si=C3Odg7I9JMf0McQn",
  },
  {
    id: 8,
    image: imgSingleton,
    title: "Patron Singleton",
    text: "Patrón que garantiza que una clase tenga solo una instancia y proporciona un punto de acceso global a ella",
    link: "https://www.patterns.dev/vanilla/singleton-pattern",
  },
  {
    id: 9,
    image: imgSeguridad,
    title: "Seguridad Web",
    text: "Conjunto de prácticas y medidas implementadas para proteger aplicaciones y sistemas web contra amenazas y ataques.",
    link: "https://www.freecodecamp.org/learn/information-security/",
  },
  {
    id: 10,
    image: imgScrum,
    title: "S.C.R.U.M",
    text: "Metodología ágil de desarrollo de software que se basa en la colaboración, la adaptabilidad y la entrega iterativa de productos.",
    link: "https://youtu.be/WZ8U_NHVdhI?si=vxiC0jvOl_7g6EtV",
  },
  {
    id: 11,
    image: imgTdd,
    title: "T.D.D",
    text: "'Desarrollo Guiado por Pruebas' Enfoque de desarrollo donde las pruebas automatizadas se crean antes del código de producción para garantizar que el código cumpla con los requisitos.",
    link: "https://youtu.be/_t9l2TwGioc?si=914nxIbRIL5gJYHc",
  },
  {
    id: 12,
    image: imgIa,
    title: "Fundamentos - IA",
    text: "Campo de la informática que se centra en crear sistemas capaces de realizar tareas que normalmente requieren inteligencia humana.",
    link: "https://learning.edx.org/course/course-v1:Microsoft+DAT263x+2T2018/home",
  },
  {
    id: 13,
    image: imgEventos,
    title: "Arquitectura basada en eventos",
    text: "Arquitectura donde las acciones y cambios en el sistema generan eventos, a los cuales otros componentes pueden reaccionar.",
    link: "https://youtu.be/xwXrHW9yS3c?si=M6VVfwSZw4jSrlcS",
  },
  {
    id: 14,
    image: imgPatterns,
    title: "Patrones de diseño",
    text: "Soluciones probadas para problemas comunes en el diseño de software.",
    link: "https://www.patterns.dev/vanilla",
  },
  {
    id: 15,
    image: imgLogica,
    title: "Lógica de Programación",
    text: "Proceso de pensamiento y resolución de problemas aplicado al diseño de algoritmos y programas.",
    link: "https://ed.team/cursos/programacion",
  },
];
