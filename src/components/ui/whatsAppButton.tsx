import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5492231234567"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: "30px",
        bottom: "30px",
        width: "65px",
        height: "65px",
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "40px",
        boxShadow: "0 8px 25px rgba(0,0,0,.25)",
        zIndex: 9999,
        transition: "all .3s ease",
      }}
    >
      <FaWhatsapp />
    </a>
  );
};