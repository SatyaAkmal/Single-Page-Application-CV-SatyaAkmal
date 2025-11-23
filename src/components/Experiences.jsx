import React from "react";

export default function Experiences({ data }) {
  return (
    <section className="w-full p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Experience
      </h2>

      <div className="relative ml-6">
        {/* Timeline Line */}
        <div className="absolute left-3 top-0 bottom-0 w-[3px] bg-gray-300 rounded-full"></div>

        <div className="space-y-10">
          {data.map((exp, i) => (
            <div key={i} className="relative flex gap-6 items-start">
              
              {/* Icon Bulat */}
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shadow-sm border border-blue-200">
                  <span className="text-blue-600 text-xl">💼</span>
                </div>
              </div>

              {/* Card Experience */}
              <div className="flex-1 p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">

                {/* Bagian atas: Posisi + Badge */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {exp.posisi}
                  </h3>

                  {/* Badge kategori */}
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium
                      ${
                        exp.tipe === "project"
                          ? "bg-green-100 text-green-600"
                          : exp.tipe === "internship"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-purple-100 text-purple-600"
                      }
                    `}
                  >
                    {exp.tipe}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-1">{exp.perusahaan}</p>

                {/* Tanggal + Icon */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <span className="text-lg">📅</span>
                  <span>
                    {exp.mulai} — {exp.selesai}
                  </span>
                </div>

                {/* Deskripsi */}
                <p className="text-gray-700 leading-relaxed mb-3">
                  {exp.deskripsi}
                </p>

                {/* Teknologi yang digunakan */}
                {exp.stack && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.stack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
