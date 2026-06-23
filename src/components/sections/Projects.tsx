import { Link } from "react-router-dom";

import { projects } from "../../data/projects";

import { useState } from "react";

export const Projects = () => {
  const visibleProjects = projects.slice(0, 4);

  const [selectedProject, setSelectedProject] =
  useState<any>(null);

  return (
    <section
      id="trabajos"
      style={{
        background: "#ffffff",
        padding: "120px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          padding: "0 60px",
        }}
      >
        {/* Header */}

        <div
          className="projects-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            marginBottom: "60px",
          }}
        >
          <div>
            <span
              style={{
                color: "#C9A14A",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "14px",
              }}
            >
              Trabajos realizados
            </span>

            <h2
              className="projects-title"
              style={{
                marginTop: "12px",
                fontSize: "48px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              Proyectos que hablan
              <br />
              por nosotros
            </h2>
          </div>

          <Link
            to="/proyectos"
            style={{
              background: "#C9A14A",
              color: "#111111",
              borderRadius: "12px",
              padding: "16px 30px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow:
                "0 10px 25px rgba(201,161,74,.25)",
            }}
          >
            Ver todos los trabajos
          </Link>
        </div>

        {/* Grid */}

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(4, minmax(0, 1fr))",
            gap: "24px",
          }}
        >
          {visibleProjects.map((project) => (
            <div
              className="project-card"
              key={project.id}
              onClick={() => setSelectedProject(project)}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "24px",
                height: "420px",
                cursor: "pointer",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "0.4s",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,0))",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "24px",
                  left: "24px",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    opacity: 0.8,
                    marginTop: "6px",
                    textTransform: "capitalize",
                  }}
                >
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.75)",
            zIndex: 9999,

            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="project-home-modal"
            style={{
              background: "#fff",
              width: "100%",
              maxWidth: "900px",
              borderRadius: "24px",
              overflow: "hidden",
            }}
          >
            <div
  style={{
    padding: "20px 20px 0",
  }}
>
  <button
    onClick={() => setSelectedProject(null)}
    className="project-home-modal-back"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",

      border: "none",
      background: "#f8f8f8",

      color: "#111827",

      padding: "12px 18px",
      borderRadius: "999px",

      cursor: "pointer",
      fontWeight: 600,
      fontSize: "14px",

      boxShadow:
        "0 4px 12px rgba(0,0,0,.06)",

      transition: ".3s",
    }}
  >
    ← Volver
  </button>
</div>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="project-home-modal-image"
              style={{
                width: "100%",
                height: "580px",
                objectFit: "cover",
              }}
            />

            <div
              className="project-home-modal-content"
              style={{
                padding: "30px",
              }}
            >
              <span
                style={{
                  color: "#C9A14A",
                  fontWeight: 600,
                }}
              >
                {selectedProject.category}
              </span>

              <h2
              className="project-home-modal-title"
                style={{
                  marginTop: "12px",
                  fontSize: "34px",
                  color: "#111827",
                }}
              >
                {selectedProject.title}
              </h2>

              <p
                style={{
                  marginTop: "20px",
                  color: "#6B7280",
                  lineHeight: "1.8",
                }}
              >
                {selectedProject.description}
              </p>

              <Link
                to="/proyectos"
                style={{
                  display: "inline-block",
                  marginTop: "30px",

                  background: "#C9A14A",
                  color: "#111",

                  padding: "14px 24px",
                  borderRadius: "12px",

                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Ver proyecto completo
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
    
  );
};