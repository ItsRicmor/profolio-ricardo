import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building My Path Toward Software Architecture",
    excerpt: "Documenting each phase of my journey toward becoming a Software Architect — through real-world projects, patterns, and clean architecture.",
    date: "2025-11-10",
    tags: ["Architecture", "Career"],
    readMoreUrl: "https://medium.com/@ricmor/building-my-path-toward-software-architecture-df6f8e985268",
    content: `Since I started studying Software Engineering, I discovered my passion for patterns. I wanted to understand how things work — and how to build them in the best possible way. By "the best way," I mean creating systems that can grow naturally: flexible, maintainable, and scalable applications.\n\nThat curiosity led me to dive deep into concepts such as OOP, Design Patterns, Clean Architecture, best practices, code smells, and many other ideas essential to becoming a Software Architect someday.`,
  },
  {
    id: "2",
    title: "Tipos de datos, programación para principiantes",
    excerpt: "Understanding data types is one of the hardest parts of learning to code. A beginner-friendly guide to runtime vs compile-time data and how to store information.",
    date: "2020-05-25",
    tags: ["Programming", "Beginners"],
    readMoreUrl: "https://medium.com/@ricmor/tipos-de-datos-para-principiantes-b045f5320d31",
    content: `Quizá lo más difícil de entender al iniciar a programar es de que manera se pueden almacenar datos en tiempo de ejecución. Muchas veces al iniciar en éste mundo pensamos que por si solos estos datos van a persistir en el tiempo, pero no es tan simple.\n\nEl objetivo de este post es aclarar estos puntos, que a mi parecer es sumamente importante tener claro.`,
  },
  {
    id: "3",
    title: "¿Hello World sencillo? No lo creo…",
    excerpt: "Starting to code isn't easy. A personal story about the journey from dreaming about building games to writing your first real lines of code.",
    date: "2020-05-22",
    tags: ["Programming", "Personal"],
    readMoreUrl: "https://medium.com/@ricmor/hello-world-sencillo-no-lo-creo-62e822e09db8",
    content: `Realmente empezar a programar no es fácil. Para tratar de mostrar mi punto, permíteme contarle mi historia personal.\n\nCuando estaba en penúltimo grado del colegio era un completo fan de los videojuegos, tanto así que soñaba con algún día crear los míos. Tiempo después descubrí la programación; imaginaba todo lo que podría crear.`,
  },
];
