import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
