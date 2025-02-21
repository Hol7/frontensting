'use client'
import React, { useState } from "react";
import { Input } from "@/components/ui/input"
import { Label} from "@/components/ui/label"
import { Button } from "@/components/ui/button"


const FontSelector = () => {
  const [fontUrl, setFontUrl] = useState("");
  const [uploadedFont, setUploadedFont] = useState(null);
  const [selectedElements, setSelectedElements] = useState(["h1", "p"]);

  const handleFontUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFont(e.target.files[0]);
    }
  };

  const handleElementToggle = (element) => {
    setSelectedElements((prev) =>
      prev.includes(element) ? prev.filter((el) => el !== element) : [...prev, element]
    );
  };

  return (
    <div>
      {/* Option 1: Add URL */}
      <div className="mb-4">
        <Label htmlFor="font-url">Lien de la police</Label>
        <Input
          id="font-url"
          placeholder="https://example.com/font.ttf"
          value={fontUrl}
          onChange={(e) => setFontUrl(e.target.value)}
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
        <div className="flex gap-2">
          <label>
            <input
              type="checkbox"
              checked={selectedElements.includes("h1")}
              onChange={() => handleElementToggle("h1")}
            />
            H1
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedElements.includes("h2")}
              onChange={() => handleElementToggle("h2")}
            />
            H2
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedElements.includes("p")}
              onChange={() => handleElementToggle("p")}
            />
            Paragraphes
          </label>
        </div>
      </div>

      {/* Apply Font Button */}
      <Button variant="default" size="lg" className="mt-4 w-full">
        Appliquer la police
      </Button>
    </div>
  );
};

export default FontSelector;