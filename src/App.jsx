import React from "react";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";

import data from "./data/dataMahasiswa.json";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <Profile data={data.profile} />
        <Skills skills={data.skills} />
        <Experiences experiences={data.experiences} />
        <Contact />

      </div>
    </div>
  );
};

export default App;
