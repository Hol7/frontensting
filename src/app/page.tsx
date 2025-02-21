import Image from "next/image";
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

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
    {/* Left Side: Font Selector */}
    <div className="w-1/4 p-4 bg-white border-r border-gray-200">
      <Card>
        <CardHeader>
          <CardTitle>Ajoutez votre police</CardTitle>
        </CardHeader>
        <CardContent>
          <FontSelector/>
        </CardContent>
      </Card>
    </div>

    {/* Right Side: Preview Section */}
    <div className="w-3/4 p-8">
      <PreviewSection />
    </div>
  </div>
  );
}
