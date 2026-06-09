import {
  FaMedal,
  FaRulerCombined,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaMedal size={28} />,
    title: "Calidad Premium",
    description:
      "Trabajamos con materiales de primera línea para garantizar durabilidad y terminaciones impecables.",
  },
  {
    icon: <FaRulerCombined size={28} />,
    title: "Trabajos a Medida",
    description:
      "Fabricamos cada abertura según las necesidades y dimensiones de cada proyecto.",
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Garantía",
    description:
      "Respaldamos nuestros productos y acompañamos a nuestros clientes después de la instalación.",
  },
  {
    icon: <FaTools size={28} />,
    title: "Instalación Profesional",
    description:
      "Realizamos colocaciones seguras y precisas para asegurar el mejor resultado.",
  },
];

export const Benefits = () => {
  return (
    <section
      style={{
        background: "#FAF8F4",
        padding: "110px 0",
      }}
    >
      <div
        style={{
          width: "95%",
          maxWidth: "1800px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <span
            style={{
              color: "#C9A14A",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "14px",
            }}
          >
            ¿Por qué elegirnos?
          </span>

          <h2
            style={{
              marginTop: "12px",
              fontSize: "48px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            Compromiso, calidad y experiencia
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "25px",
          }}
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              style={{
                background: "#fff",
                padding: "35px",
                borderRadius: "20px",
                textAlign: "center",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,.05)",
              }}
            >
              <div
                style={{
                  color: "#C9A14A",
                  marginBottom: "20px",
                  justifyItems: "center",
                }}
              >
                {benefit.icon}
              </div>

              <h3
                style={{
                  marginBottom: "12px",
                  color: "#111827",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                {benefit.title}
              </h3>

              <p
                style={{
                  color: "#6B7280",
                  lineHeight: 1.8,
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};