import { Link } from "react-router-dom";

import { projects } from "../../data/projects";

export const Projects = () => {
  const visibleProjects = projects.slice(0, 6);

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
              "repeat(3, minmax(0, 1fr))",
            gap: "24px",
          }}
        >
          {visibleProjects.map((project) => (
            <div
              className="project-card"
              key={project.id}
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
    </section>
  );
};