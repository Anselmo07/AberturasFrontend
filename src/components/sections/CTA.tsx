import { WHATSAPP_URL } from "../ui/buttonContact";

export const CTA = () => {
  return (
    <section
      id="contacto"
      className="section-anchor"
      style={{
        background: "#111111",
        padding: "100px 0",
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
          className="cta-content"
          style={{
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <span
            style={{
              color: "#C9A14A",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontWeight: 600,
            }}
          >
            Solicite su presupuesto
          </span>

          <h2
          className="cta-title"
            style={{
              marginTop: "20px",
              color: "#fff",
              fontSize: "58px",
              fontWeight: 700,
              lineHeight: "1.1",
            }}
          >
            ¿Tenés un proyecto en mente?
          </h2>

          <p
            className="cta-description"
            style={{
              marginTop: "24px",
              color: "#D1D5DB",
              fontSize: "20px",
              lineHeight: "1.8",
            }}
          >
            Te ayudamos a encontrar la mejor solución
            para tu hogar, comercio o proyecto
            arquitectónico.
          </p>

          <div
            style={{
              marginTop: "40px",
            }}
          >
            <a
              className="cta-button"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                background: "#C9A14A",
                color: "#111111",
                padding: "18px 38px",
                borderRadius: "12px",
                fontWeight: 700,
                transition: ".3s",
              }}
            >
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};