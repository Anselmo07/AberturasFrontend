import heroImage from "../../assets/p1.webp";

import { WHATSAPP_URL } from "../ui/buttonContact";

export const Hero = () => {
  return (
    <section
      id="inicio"
      
      className="relative h-screen min-h-[850px]"
    >
      <img
        src={heroImage}
        alt="Aberturas de aluminio"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      <div className="absolute inset-0 bg-black/60" />

      <div
        className="
          relative
          z-10
          flex
          h-full
          items-center
        "
      >
        <div
        className="hero-content"
          style={{
            marginLeft: "120px",
            maxWidth: "700px",
          }}
        >
          <span
            style={{
              color: "#C9A14A",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Diseño, calidad y funcionalidad
          </span>

          <h1
            className="hero-title"
            style={{
              marginTop: "20px",
              fontSize: "84px",
              lineHeight: "0.9",
              fontWeight: 800,
              color: "#fff",
            }}
          >
            INNOVA
            <br />
            ABERTURAS
          </h1>

          <p
            className="hero-description"
            style={{
              marginTop: "30px",
              maxWidth: "560px",
              fontSize: "22px",
              lineHeight: "1.7",
              color: "rgba(255,255,255,.9)",
            }}
          >
            Soluciones a medida para tu hogar o proyecto.
            Estética, durabilidad y confort en cada detalle.
          </p>

          <div
            className="hero-buttons"
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "40px",
            }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#C9A14A",
                color: "#000",
                border: "none",
                padding: "16px 28px",
                borderRadius: "12px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Solicitar Presupuesto
            </a>

            <a
              href="#trabajos"
              style={{
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,.5)",
                padding: "16px 28px",
                borderRadius: "12px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Ver Trabajos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};