import { Container } from "./Container";

import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

import { WHATSAPP_URL } from "../ui/buttonContact";

export const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
        background: "rgba(0,0,0,.75)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <Container>
        <nav
          className="navbar-grid"
          style={{
            height: "100px",
            marginLeft: "2%",
            marginRight: "2%",
            display: "grid",
            gridTemplateColumns: "250px 1fr 220px auto",
            alignItems: "center",
          }}
        >

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                border: "1px solid #C9A14A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#C9A14A",
                fontWeight: 700,
              }}
            >
              A
            </div>

            <div>
              <h2
                style={{
                  color: "white",
                  fontSize: "24px",
                  fontWeight: 700,
                }}
              >
                ABERTURAS
              </h2>

              <p
                style={{
                  color: "#C9A14A",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Diseño y Calidad
              </p>
            </div>
          </div>

          <button
              className="navbar-mobile-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "26px",
              }}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul
            className="navbar-menu"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "48px",
              color: "white",
            }}
          >
            <li><a href="/#inicio">Inicio</a></li>
            <li><a href="/#nosotros">Nosotros</a></li>
            <li><a href="/#productos">Productos</a></li>
            <li><a href="/#trabajos">Trabajos</a></li>
            <li><a href="/#contacto">Contacto</a></li>
          </ul>

          <div
            className="navbar-cta"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              
            }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{
                border: "none",
                borderRadius: "12px",
                padding: "16px 28px",
                fontWeight: 600,
              }}
            >
              Presupuesto
            </a>
          </div>
        </nav>

        {menuOpen && (
          <div className="mobile-menu">
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#productos">Productos</a>
            <a href="#trabajos">Trabajos</a>
            <a href="#contacto">Contacto</a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mobile-budget-btn"
            >
              Solicitar Presupuesto
            </a>
          </div>
        )}
        
      </Container>
    </header>
  );
};