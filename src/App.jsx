import React from "react";
import data from "./data/dataMahasiswa.json";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <Profile data={data} />
        <Skills data={data.skills} />
        <Experiences data={data.experiences} />
      </div>
    </div>
  );
}

export default App
