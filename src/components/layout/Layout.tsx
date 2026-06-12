import { Outlet } from "react-router-dom";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "../ui/whatsAppButton";

export const Layout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />

      <WhatsAppButton />
    </>
  );
};