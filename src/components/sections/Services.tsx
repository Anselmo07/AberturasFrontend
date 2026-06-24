import { services } from "../../data/services";

export const Services = () => {
  return (
    <section
      id="productos"
      className="section-anchor"
      style={{
        background: "#faf8f4",
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
        {/* Header */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
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
            Nuestros Productos
          </span>

          <h2
            style={{
              marginTop: "12px",
              fontSize: "48px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            Soluciones para cada espacio
          </h2>
        </div>

        {/* Productos */}

        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "24px",
          }}
        >
          {services.map((service) => (
            <article
              key={service.title}
              style={{
                textAlign: "center",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "18px",
                  marginBottom: "18px",
                }}
              />

              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: "3%",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#6B7280",
                  fontSize: "14px",
                  lineHeight: "1.7",
                  maxWidth: "220px",
                  margin: "0 auto 10% auto",
                }}
              >
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};