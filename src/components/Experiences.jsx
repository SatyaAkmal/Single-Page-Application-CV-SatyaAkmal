import React from "react";

//BAGIAN EXPERIENCES//
const badgeColor = {
  project: "bg-green-100 text-green-700",
  internship: "bg-blue-100 text-blue-700",
  organization: "bg-purple-100 text-purple-700"
};

const Experiences = ({ experiences }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg mt-10 mb-20">
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Experience</h2>

      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="p-6 bg-gray-50 border rounded-xl shadow-sm flex gap-6">
            
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
              💼
            </div>

            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="text-lg font-bold text-gray-800">
                  {exp.title}
                </h3>

                <span
                  className={`px-3 py-1 text-xs rounded-full ${badgeColor[exp.type]}`}
                >
                  {exp.type}
                </span>
              </div>

              <p className="text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-500">
                {exp.start} — {exp.end}
              </p>

              <p className="mt-3 text-sm text-gray-700">{exp.description}</p>

              <div className="flex gap-2 mt-3">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;