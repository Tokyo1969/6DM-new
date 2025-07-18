import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function IntroScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-gold font-bold text-6xl animate-fade-in">
      <div className="text-center">
        <h1 className="text-7xl tracking-widest">6DM</h1>
        <p className="text-xl mt-4 text-gray-400">synthpop / electronic music</p>
      </div>
    </div>
  );
}