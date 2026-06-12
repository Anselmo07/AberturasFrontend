import project1 from "../assets/heroAberturas.jpg";
import project2 from "../assets/heroAberturas.jpg";
import project3 from "../assets/heroAberturas.jpg";
import project4 from "../assets/heroAberturas.jpg";
import project5 from "../assets/heroAberturas.jpg";
import project6 from "../assets/heroAberturas.jpg";

const projects = [
  {
    image: project1,
    title: "Quinchos",
    category: "Quinchos",
  },
  {
    image: project2,
    title: "Mamparas",
    category: "Mamparas",
  },
  {
    image: project3,
    title: "Roller",
    category: "Roller",
  },
  {
    image: project4,
    title: "Puertas plegables",
    category: "Puertas",
  },
  {
    image: project5,
    title: "Techos",
    category: "Techos",
  },
  {
    image: project6,
    title: "Cielo raso PVC",
    category: "PVC",
  },
];

export const ProjectsPage = () => {
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
          marginBottom: "80px",
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
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,.06)",
              }}
            >
              <img
                src={project.image}
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