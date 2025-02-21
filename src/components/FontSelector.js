'use client'
import React, { useState } from "react";
import { Input } from "@/components/ui/input"
import { Label} from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const FontSelector = ({
  font,
  onFontChange,
  onElementToggle,
}) => {
  const handleFontUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      onFontChange("file", e.target.files[0]);
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium mb-2">Police {font.id}</h3>
      {/* Option 1: Add URL */}
      <div className="mb-4">
        <Label htmlFor={`font-url-${font.id}`}>Lien de la police</Label>
        <Input
          id={`font-url-${font.id}`}
          placeholder="https://example.com/font.ttf"
          value={font.url}
          onChange={(e) => onFontChange("url", e.target.value)}
        />
      </div>

      {/* Option 2: Upload File */}
      <div className="mb-4">
        <Label>Téléchargez un fichier .ttf</Label>
        <input
          type="file"
          accept=".ttf,.woff,.woff2"
          onChange={handleFontUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 mt-2"
        />
      </div>

      {/* Select Elements */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Appliquer à :</h3>
        <div className="flex flex-wrap gap-2">
          <label>
            <input
              type="checkbox"
              checked={font.elements.includes("body")}
              onChange={() => onElementToggle("body")}
            />
            Tout le corps (body)
          </label>
          <label>
            <input
              type="checkbox"
              checked={font.elements.includes("h1")}
              onChange={() => onElementToggle("h1")}
            />
            H1
          </label>
          <label>
            <input
              type="checkbox"
              checked={font.elements.includes("h2")}
              onChange={() => onElementToggle("h2")}
            />
            H2
          </label>
          <label>
            <input
              type="checkbox"
              checked={font.elements.includes("p")}
              onChange={() => onElementToggle("p")}
            />
            Paragraphes
          </label>
          <label>
            <input
              type="checkbox"
              checked={font.elements.includes("span")}
              onChange={() => onElementToggle("span")}
            />
            Span
          </label>
        </div>
      </div>
    </div>
  );
};

export default FontSelector;