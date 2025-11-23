import React from "react";

export default function Skills({ data }) {
  return (
    <section className="w-full p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Skills & Expertise
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {data.map((s, i) => (
          <div
            key={i}
            className="p-5 border rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            {/* Nama Skill + Badge */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                {s.icon && (
                  <img
                    src={s.icon}
                    alt={s.nama}
                    className="w-6 h-6 object-contain"
                  />
                )}
                <h3 className="font-semibold text-gray-900 text-lg">
                  {s.nama}
                </h3>
              </div>

              {/* Badge Level */}
              <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
                {s.level}
              </span>
            </div>

            {/* Lama pengalaman */}
            <p className="text-sm text-gray-600 mb-3">{s.experience}</p>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div
                className="h-2 bg-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${s.percent}%` }}
              />
            </div>

            <div className="text-right text-sm text-gray-600 mt-1">
              {s.percent}%
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
