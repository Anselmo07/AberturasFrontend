// src/constants/contact.ts

export const WHATSAPP_NUMBER = "5492231234567";

export const WHATSAPP_MESSAGE =
  "Hola, vi su sitio web y me gustaría solicitar un presupuesto.";

export const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;