import { useState } from "react";

import { projects } from "../data/projectsPage";

import { WHATSAPP_URL } from "../components/ui/buttonContact";

export const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("Todos");

  const [selectedProject, setSelectedProject] =
    useState<any>(null);

  const [selectedImage, setSelectedImage] =
    useState(0);

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
          className="projects-page-title"
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
          className="projects-page-description"
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
          className="projects-filters"
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
              onClick={() => {
                setSelectedProject(project);
                setSelectedImage(0);
              }}
              style={{
                background: "#fff",
                borderRadius: "24px",
                overflow: "hidden",
                cursor: "pointer",
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

      {/* Modal */}

      {selectedProject && (
        <div
          onClick={() =>
            setSelectedProject(null)
          }
          style={{
            position: "fixed",
            inset: 0,
            background:
              "rgba(0,0,0,.75)",
            zIndex: 9999,

            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            padding: "30px",
          }}
        >
          <div
            onClick={(e) =>
              e.stopPropagation()
            }
            className="project-modal"
            style={{
              background: "#fff",
              width: "100%",
              maxWidth: "1300px",
              borderRadius: "24px",
              overflow: "hidden",

              display: "grid",
              gridTemplateColumns:
                "1.1fr 0.9fr",
            }}
          >
            {/* Galería */}

            <div
              style={{
                padding: "30px",
              }}
            >
              <img
                src={
                  selectedProject.images[
                    selectedImage
                  ]
                }
                alt=""
                className="project-modal-main-image"
                style={{
                  width: "100%",
                  height: "520px",
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "16px",
                  overflowX: "auto",
                }}
              >
                {selectedProject.images.map(
                  (
                    image: string,
                    index: number
                  ) => (
                    <img
                      key={index}
                      src={image}
                      alt=""
                      onClick={() =>
                        setSelectedImage(
                          index
                        )
                      }
                      className="project-modal-gallery"
                      style={{
                        width: "100px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "10px",
                        cursor: "pointer",
                        border:
                          selectedImage ===
                          index
                            ? "3px solid #C9A14A"
                            : "2px solid transparent",
                      }}
                    />
                  )
                )}
              </div>
            </div>

            {/* Información */}

            <div
              className="project-modal-info"
              style={{
                padding: "40px",
                borderLeft:
                  "1px solid #eee",
              }}
            >
              <span
                style={{
                  color: "#C9A14A",
                  fontWeight: 600,
                  textTransform:
                    "uppercase",
                }}
              >
                {selectedProject.category}
              </span>

              <h2
                style={{
                  marginTop: "14px",
                  fontSize: "42px",
                  color: "#111827",
                }}
              >
                {selectedProject.title}
              </h2>

              <p
                style={{
                  marginTop: "24px",
                  color: "#6B7280",
                  lineHeight: "1.9",
                  fontSize: "17px",
                }}
              >
                {
                  selectedProject.description
                }
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "40px",
                  background: "#C9A14A",
                  color: "#111",
                  padding:
                    "18px 32px",
                  borderRadius: "12px",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Solicitar presupuesto
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};