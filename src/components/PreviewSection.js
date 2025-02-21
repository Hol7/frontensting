'use client'
import React, { useEffect, useState } from "react";
import { motion } from "motion/react"

const PreviewSection = ({ fonts }) => {
  const [fontFamilies, setFontFamilies] = useState({});

  // Function to load a font dynamically
  const loadFont = (source, fontFamilyName) => {
    const fontFace = new FontFace(fontFamilyName, `url(${source})`);
    document.fonts.add(fontFace);

    return fontFace.load().then(() => {
      setFontFamilies((prev) => ({ ...prev, [fontFamilyName]: fontFamilyName }));
    });
  };

  useEffect(() => {
    fonts.forEach((font, index) => {
      if (font.url) {
        // Load font from URL
        loadFont(font.url, `CustomFont${index + 1}`);
      } else if (font.file) {
        // Load font from uploaded file
        const objectURL = URL.createObjectURL(font.file);
        loadFont(objectURL, `CustomFont${index + 1}`);

        // Clean up the object URL when the component unmounts
        return () => URL.revokeObjectURL(objectURL);
      }
    });
  }, [fonts]);

  useEffect(() => {
    // Apply fonts to selected elements
    fonts.forEach((font, index) => {
      const fontFamilyName = `CustomFont${index + 1}`;
      if (fontFamilies[fontFamilyName]) {
        font.elements.forEach((element) => {
          document.querySelectorAll(element).forEach((el) => {
            el.style.fontFamily = fontFamilies[fontFamilyName];
          });
        });
      }
    });
  }, [fontFamilies, fonts]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Body Element */}
      <div style={{ fontFamily: fontFamilies.CustomFont1 || "inherit" }}>
        <p className="text-lg text-gray-700 mb-4">
          Ceci est du texte dans le corps (body).
        </p>
      </div>

      {/* H1 Element */}
      <h1
        style={{ fontFamily: fontFamilies.CustomFont2 || "inherit" }}
        className="text-4xl font-bold mb-4"
      >
        Titre H1 avec votre police
      </h1>

      {/* H2 Element */}
      <h2
        style={{ fontFamily: fontFamilies.CustomFont3 || "inherit" }}
        className="text-3xl font-semibold mb-4"
      >
        Titre H2 avec votre police
      </h2>

      {/* Paragraph Element */}
      <p
        style={{ fontFamily: fontFamilies.CustomFont1 || "inherit" }}
        className="text-lg text-gray-700 mb-4"
      >
        Ceci est un paragraphe avec votre police.
      </p>

      {/* Span Element */}
      <span
        style={{ fontFamily: fontFamilies.CustomFont2 || "inherit" }}
        className="text-blue-500 font-semibold"
      >
        Texte dans une balise span.
      </span>
    </motion.div>
  );
};

export default PreviewSection;