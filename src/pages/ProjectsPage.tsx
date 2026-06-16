import { useState } from "react";

import { projects } from "../data/projectsPage";

export const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("Todos");

  const categories = [
    "Todos",
    "Quinchos",
    "Mamparas",
    "Roller",
    "Puertas",
    "Techos",
    "PVC",
  ];

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter(
          (project) =>
            project.category === selectedCategory
        );    

  return (
    <main
      style={{
        paddingTop: "140px",
        background: "#faf8f4",
        minHeight: "100vh",
      }}
    >
      {/* Header */}

      <section
        style={{
          textAlign: "center",
          padding: "0 20px",
          marginBottom: "70px",
        }}
      >
        <span
          style={{
            color: "#C9A14A",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontSize: "14px",
          }}
        >
          Nuestros Trabajos
        </span>

        <h1
          style={{
            marginTop: "16px",
            fontSize: "60px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Todos nuestros proyectos
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto 0",
            color: "#6B7280",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          Explorá algunos de nuestros trabajos
          realizados en quinchos, mamparas,
          roller, techos, puertas plegables y
          cielorrasos PVC.
        </p>

        {/* Filtros */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category)
              }
              style={{
                padding: "12px 22px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                transition: ".3s",

                background:
                  selectedCategory === category
                    ? "#C9A14A"
                    : "#ffffff",

                color:
                  selectedCategory === category
                    ? "#111111"
                    : "#6B7280",

                boxShadow:
                  selectedCategory === category
                    ? "0 10px 25px rgba(201,161,74,.25)"
                    : "0 5px 15px rgba(0,0,0,.05)",
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}

      <section
        style={{
          width: "95%",
          maxWidth: "1800px",
          margin: "0 auto",
          paddingBottom: "120px",
        }}
      >
        <div
          className="projects-page-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, minmax(0, 1fr))",
            gap: "30px",
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{
                background: "#fff",
                borderRadius: "24px",
                overflow: "hidden",
                cursor: "pointer",

                transition: ".3s",

                boxShadow:
                  "0 10px 30px rgba(0,0,0,.06)",
              }}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  padding: "24px",
                }}
              >
                <span
                  style={{
                    color: "#C9A14A",
                    fontSize: "13px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontWeight: 600,
                  }}
                >
                  {project.category}
                </span>

                <h3
                  style={{
                    marginTop: "10px",
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#111827",
                  }}
                >
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};