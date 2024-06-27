import React from "react";
// import { Welcome } from "../components/Welcome/Welcome";
// import { ColorSchemeToggle } from "../components/ColorSchemeToggle/ColorSchemeToggle";
import { MantineProvider, TypographyStylesProvider } from "@mantine/core";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Content from "../Views/Content";
import "./index.css"

export default function HomePage() {
  return (
    <>
      {/* <Welcome />
      <ColorSchemeToggle /> */}
      <MantineProvider>
      <TypographyStylesProvider>
        <Header />
        <Content />
        <Footer />
      </TypographyStylesProvider>
    </MantineProvider>
    </>
  );
}
