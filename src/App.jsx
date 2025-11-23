import React from "react";
import data from "./data/dataMahasiswa.json";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100/60 to-white flex flex-col">
      
      {/* HEADER */}
      <header className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="w-full px-6 py-4">
          <h1 className="text-xl md:text-2xl font-semibold text-indigo-700 tracking-wide">
            PORTOFOLIO
          </h1>
        </div>
      </header>

      {/* MAIN CONTENT FULL WIDTH */}
      <main className="flex-1 w-full px-4 sm:px-8 py-8 space-y-10">
        
        {/* PROFILE — full width */}
        <Profile data={data} />

        {/* GRID FLEXIBLE */}
        <div className="grid md:grid-cols-2 gap-8">
          <Skills data={data.skills} />
          <Experiences data={data.experiences} />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500 text-sm w-full">
        © 2025 Satya — All rights reserved.
      </footer>
    </div>
  );
}
