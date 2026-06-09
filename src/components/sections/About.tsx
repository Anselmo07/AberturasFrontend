import aboutImage from "../../assets/about.jpg";

import {
  FaShieldAlt,
  FaRulerCombined,
  FaMedal,
} from "react-icons/fa";

export const About = () => {
  return (
    <section
      id="nosotros"
      style={{
        background: "#ffffff",
        padding: "120px 0",
      }}
    >
      <div
  style={{
    width: "90%",
    maxWidth: "1800px",
    margin: "0 auto 0 auto",
  }}
>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "50% 45%",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Imagen */}

          <div>
            <img
              src={aboutImage}
              alt="Sobre nosotros"
              style={{
                width: "100%",
                height: "450px",
                objectFit: "cover",
                borderRadius: "28px",
              }}
            />
          </div>

          {/* Contenido */}

          <div>
            <span
              style={{
                color: "#C9A14A",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontSize: "14px",
              }}
            >
              Sobre Nosotros
            </span>

            <h2
              style={{
                marginTop: "14px",
                marginBottom: "24px",
                fontSize: "52px",
                lineHeight: "1.1",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              Experiencia y compromiso
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.9",
                color: "#6B7280",
                marginBottom: "50px",
              }}
            >
              Nos especializamos en la fabricación e
              instalación de aberturas y cerramientos
              de aluminio, ofreciendo soluciones a
              medida para viviendas, comercios y
              proyectos arquitectónicos.
            </p>

            {/* Beneficios */}

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(3, minmax(0, 1fr))",
                gap: "20px",
                textAlign:"center",
              }}
            >
              <div
                style={{
                  background: "#F8F6F2",
                  padding: "28px",
                  borderRadius: "20px",
                }}
              >

                <div
                  style={{
                    color: "#C9A14A",
                    marginBottom: "14px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <FaMedal size={28} />
                </div>

                <h3
                  style={{
                    color: "#111827",
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  Materiales Premium
                </h3>

                <p
                  style={{
                    color: "#6B7280",
                    fontSize: "14px",
                    lineHeight: "1.7",
                  }}
                >
                  Perfiles y componentes de alta calidad.
                </p>
              </div>

              <div
                style={{
                  background: "#F8F6F2",
                  padding: "28px",
                  borderRadius: "20px",
                }}
              >

                <div
                  style={{
                    color: "#C9A14A",
                    marginBottom: "14px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <FaRulerCombined size={28} />
                </div>

                <h3
                  style={{
                    color: "#111827",
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  Trabajo a medida
                </h3>

                <p
                  style={{
                    color: "#6B7280",
                    fontSize: "14px",
                    lineHeight: "1.7",
                  }}
                >
                  Soluciones adaptadas a cada proyecto.
                </p>
              </div>

              <div
                style={{
                  background: "#F8F6F2",
                  padding: "28px",
                  borderRadius: "20px",
                }}
              >

                <div
                  style={{
                    color: "#C9A14A",
                    marginBottom: "14px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <FaShieldAlt size={28} />
                </div>

                <h3
                  style={{
                    color: "#111827",
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  Garantía
                </h3>

                <p
                  style={{
                    color: "#6B7280",
                    fontSize: "14px",
                    lineHeight: "1.7",
                  }}
                >
                  Acompañamiento y atención postventa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};