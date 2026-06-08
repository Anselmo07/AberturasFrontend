import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer
      id="contacto"
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

              <p>+54 9 11 1234-5678</p>
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

              <p>+54 9 11 1234-5678</p>
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

              <p>Tu ciudad, Argentina</p>
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

              <p>@aberturas.aluminio</p>
            </div>
          </div>
        </div>

        <div
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
      </div>
    </footer>
  );
};