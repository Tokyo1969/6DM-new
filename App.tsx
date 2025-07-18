import { Routes, Route } from "react-router-dom";
import IntroScreen from "@/components/IntroScreen";
import Music from "@/pages/Music";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroScreen />} />
      <Route path="/music" element={<Music />} />
    </Routes>
  );
}