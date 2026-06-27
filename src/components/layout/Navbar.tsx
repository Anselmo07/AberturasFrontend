import { Container } from "./Container";

import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

import { WHATSAPP_URL } from "../ui/buttonContact";

import InnovaLogo from "../../assets/InnovaLogo.png"

export const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

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
    width: "108px",
    height: "108px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  }}
>
  <img
    src={InnovaLogo}
    alt="Innova Aberturas"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
    }}
  />
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
            <li><a href="/#inicio" onClick={closeMenu}>Inicio</a></li>
            <li><a href="/#nosotros" onClick={closeMenu}>Nosotros</a></li>
            <li><a href="/#productos" onClick={closeMenu}>Productos</a></li>
            <li><a href="/#trabajos" onClick={closeMenu}>Trabajos</a></li>
            <li><a href="/#contacto" onClick={closeMenu}>Contacto</a></li>
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
            <a href="/#inicio" onClick={closeMenu}>
              Inicio
            </a>

            <a href="/#nosotros" onClick={closeMenu}>
              Nosotros
            </a>

            <a href="/#productos" onClick={closeMenu}>
              Productos
            </a>

            <a href="/#trabajos" onClick={closeMenu}>
              Trabajos
            </a>

            <a href="/#contacto" onClick={closeMenu}>
              Contacto
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mobile-budget-btn"
              onClick={closeMenu}
            >
              Solicitar Presupuesto
            </a>
          </div>
        )}
        
      </Container>
    </header>
  );
};