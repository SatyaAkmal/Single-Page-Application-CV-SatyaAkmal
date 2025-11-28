import React from "react";

const Skills = ({ skills }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg mt-10">
      <h2 className="text-xl font-semibold mb-6 text-gray-700">
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 rounded-xl shadow-sm border flex flex-col gap-4"
          >
            {/* HEADER NAME + TAG */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">

                {/* ICON */}
                <img
                  src={skill.icon_url}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />

                <h3 className="text-lg font-semibold text-gray-800">
                  {skill.name}
                </h3>
              </div>

              {skill.tag && skill.tag !== "" && (
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {skill.tag}
                </span>
              )}
            </div>

            {/* LEVEL + YEARS */}
            <p className="text-sm text-gray-500 -mt-2">
              {skill.level} · {skill.years}
            </p>

            {/* PROGRESS BAR */}
            <div className="w-full bg-gray-300 rounded-full h-2 mt-1">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
