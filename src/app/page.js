'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import FontSelector from "@/components/FontSelector"
import PreviewSection from "@/components/PreviewSection"
import React, { useState } from "react";

export default function Home() {
  const [fontUrl, setFontUrl] = useState("");
  const [uploadedFont, setUploadedFont] = useState(null);
  const [selectedElements, setSelectedElements] = useState(["h1", "p"]);
  const [fonts, setFonts] = useState([
    { id: 1, url: "", file: null, elements: [] },
    { id: 2, url: "", file: null, elements: [] },
    // { id: 3, url: "", file: null, elements: [] },
  ]);
  const handleFontChange = (id, field, value) => {
    setFonts((prevFonts) =>
      prevFonts.map((font) =>
        font.id === id ? { ...font, [field]: value } : font
      )
    );
  };

  const handleElementToggle = (id, element) => {
    setFonts((prevFonts) =>
      prevFonts.map((font) =>
        font.id === id
          ? {
              ...font,
              elements: font.elements.includes(element)
                ? font.elements.filter((el) => el !== element)
                : [...font.elements, element],
            }
          : font
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
    {/* Left Side: Font Selector */}
    <div className="w-1/4 p-4 bg-white border-r border-gray-200">
      <Card>
        <CardHeader>
          <CardTitle>Ajoutez vos polices</CardTitle>
        </CardHeader>
        <CardContent>
          {fonts.map((font) => (
            <FontSelector
              key={font.id}
              font={font}
              onFontChange={(field, value) =>
                handleFontChange(font.id, field, value)
              }
              onElementToggle={(element) =>
                handleElementToggle(font.id, element)
              }
            />
          ))}
        </CardContent>
      </Card>
    </div>

    {/* Right Side: Preview Section */}
    <div className="w-3/4 p-8">
      <PreviewSection fonts={fonts} />
    </div>
  </div>
  );

}
