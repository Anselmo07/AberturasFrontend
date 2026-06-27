import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer
      className="section-anchor"
      style={{
          background: "#111",
          color: "#fff",
          padding: "40px 0",
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
        className="footer-main"
        style={{
        display: "flex",
        justifyContent: "center",
        gap: "120px",
        flexWrap: "wrap",
      }}
    >
          {/* Telefono */}

          <div
            style={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <FaPhoneAlt
              size={20}
              color="#C9A14A"
            />

            <div>
              <span
                style={{
                  display: "block",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  color: "#C9A14A",
                  marginBottom: "4px",
                }}
              >
                Teléfono
              </span>

              <p>+54 9 3434 63-1968</p>
            </div>
          </div>

          {/* Whatsapp */}

          <div
            style={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <FaWhatsapp
              size={22}
              color="#C9A14A"
            />

            <div>
              <span
                style={{
                  display: "block",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  color: "#C9A14A",
                  marginBottom: "4px",
                }}
              >
                WhatsApp
              </span>

              <p>+54 9 3434 63-1968</p>
            </div>
          </div>

          {/* Ubicacion */}

          <div
            style={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <FaMapMarkerAlt
              size={20}
              color="#C9A14A"
            />

            <div>
              <span
                style={{
                  display: "block",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  color: "#C9A14A",
                  marginBottom: "4px",
                }}
              >
                Ubicación
              </span>

              <p>Eatado De Israel 222, Parana</p>
            </div>
          </div>

          {/* Instagram */}

          <div
            style={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <FaInstagram
              size={20}
              color="#C9A14A"
            />

            <div>
              <span
                style={{
                  display: "block",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  color: "#C9A14A",
                  marginBottom: "4px",
                }}
              >
                Seguinos
              </span>

              <a href="https://www.instagram.com/innovaaberturas/">@innovaaberturas
</a>
            </div>
          </div>
        </div>

        <div
          className="footer-copy"
          style={{
            marginTop: "30px",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255,255,255,.08)",
            textAlign: "center",
            color: "#9CA3AF",
            fontSize: "14px",
          }}
        >
          © {new Date().getFullYear()} Aberturas de
          Aluminio. Todos los derechos reservados.
        </div>

        <div
          className="footer-author"
          style={{
            marginTop: "20px",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255,255,255,.05)",
            textAlign: "center",
            color: "#6B7280",
            fontSize: "13px",
          }}
        >
          Diseñado y desarrollado por{" "}
          <a
            href="https://www.anselmovecchio.com"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#C9A14A",
              fontWeight: 600,
            }}
          >
            Anselmo Vecchio
          </a>
        </div>
      </div>
    </footer>
  );
};