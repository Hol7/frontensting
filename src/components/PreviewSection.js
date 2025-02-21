'use client'
import React, { useEffect, useState } from "react";
import { motion } from "motion/react"

const PreviewSection = () => {
  const [fontFamily, setFontFamily] = useState("");

  // Simulate receiving font data from FontSelector
  const fontUrl = "https://example.com/font.ttf"; // Replace with actual state
  const uploadedFont = null; // Replace with actual state
  const selectedElements = ["h1", "p"]; // Replace with actual state

  useEffect(() => {
    if (fontUrl) {
      const fontFace = new FontFace("CustomFont", `url(${fontUrl})`);
      document.fonts.add(fontFace);
      fontFace.load().then(() => {
        setFontFamily("CustomFont");
      });
    } else if (uploadedFont) {
      const objectURL = URL.createObjectURL(uploadedFont);
      const fontFace = new FontFace("CustomFont", `url(${objectURL})`);
      document.fonts.add(fontFace);
      fontFace.load().then(() => {
        setFontFamily("CustomFont");
      });
    }
  }, [fontUrl, uploadedFont]);

  useEffect(() => {
    if (fontFamily) {
      selectedElements.forEach((element) => {
        document.querySelectorAll(element).forEach((el) => {
          el.style.fontFamily = fontFamily;
        });
      });
    }
  }, [fontFamily, selectedElements]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h1 style={{ fontFamily }} className="text-4xl font-bold mb-4">
        Titre H1 avec votre police
      </h1>
      <h2 style={{ fontFamily }} className="text-3xl font-semibold mb-4">
        Titre H2 avec votre police
      </h2>
      <p style={{ fontFamily }} className="text-lg text-gray-700 mb-4">
        Ceci est un paragraphe avec votre police. Vous pouvez tester ici comment
        elle s'affiche sur du texte long.
      </p>
      <button
        style={{ fontFamily }}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
      >
        Bouton avec votre police
      </button>
    </motion.div>
  );
};

export default PreviewSection;