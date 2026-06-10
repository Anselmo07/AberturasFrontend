import project1 from "../../assets/heroAberturas.jpg";
import project2 from "../../assets/heroAberturas.jpg";
import project3 from "../../assets/heroAberturas.jpg";
import project4 from "../../assets/heroAberturas.jpg";
import project5 from "../../assets/heroAberturas.jpg";

import { useState } from "react";

const projects = [
  project1,
  project2,
  project3,
  project4,
  project5
];


export const Projects = () => {
  
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
  ? projects
  : projects.slice(0, 4);

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

          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              background: "#C9A14A",
              color: "#111111",
              border: "none",
              borderRadius: "12px",
              padding: "16px 30px",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all .3s ease",
              boxShadow:
                "0 10px 25px rgba(201,161,74,.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 15px 35px rgba(201,161,74,.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(201,161,74,.25)";
            }}
          >
            {showAll
              ? "Mostrar menos"
              : "Ver todos los trabajos"}
          </button>
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
          {visibleProjects.map((project, index) => (
            <div
              className="project-card"
              key={index}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "24px",
                height: "420px",
                cursor: "pointer",
              }}
            >
              <img
                src={project}
                alt={`Proyecto ${index + 1}`}
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
                  Proyecto {index + 1}
                </h3>

                <p
                  style={{
                    opacity: 0.8,
                    marginTop: "6px",
                  }}
                >
                  Aberturas de aluminio
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};