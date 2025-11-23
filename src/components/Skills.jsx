import React from "react";

function SkillBar({ name, percent, level }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span>{level} • {percent}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded h-2 mt-1">
        <div
          className="h-2 rounded"
          style={{ width: `${percent}%`, background: "linear-gradient(90deg,#4f46e5,#06b6d4)" }}
        />
      </div>
    </div>
  );
}

export default function Skills({ data }) {
  return (
    <section id="skills" className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-medium mb-4">Skills</h2>
      {data.map((s, i) => <SkillBar key={i} name={s.nama} percent={s.percent} level={s.level} />)}
    </section>
  );
}
