import React from "react";

export default function Experiences({ data }) {
  return (
    <section id="experiences" className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-medium mb-4">Experiences</h2>
      <div className="flex flex-col gap-4">
        {data.map((exp, i) => (
          <article key={i} className="border-l-2 border-indigo-500 pl-4">
            <h3 className="font-semibold">{exp.posisi} — <span className="font-normal text-sm">{exp.perusahaan}</span></h3>
            <time className="text-sm text-gray-500">{exp.mulai} — {exp.selesai}</time>
            <p className="mt-2 text-gray-700">{exp.deskripsi}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
