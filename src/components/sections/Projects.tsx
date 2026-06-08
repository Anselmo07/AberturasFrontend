import project1 from "../../assets/heroAberturas.jpg";
import project2 from "../../assets/heroAberturas.jpg";
import project3 from "../../assets/heroAberturas.jpg";
import project4 from "../../assets/heroAberturas.jpg";

const projects = [
  project1,
  project2,
  project3,
  project4,
];

export const Projects = () => {
  return (
    <section
      id="trabajos"
      style={{
        background: "#f8f6f2",
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

          <button className="btn-secondary">
            Ver todos los trabajos
          </button>
        </div>

        {/* Grid */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(4, minmax(0, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((project, index) => (
            <div
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