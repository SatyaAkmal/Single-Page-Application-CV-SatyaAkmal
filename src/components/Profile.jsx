import React from "react";

export default function Profile({ data }) {
  return (
    <section className="w-full p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

        {/* Foto */}
        <img
          src={data.foto}
          alt={data.nama}
          className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-md border border-indigo-200"
        />

        {/* Text */}
        <div className="text-center md:text-left max-w-xl">

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {data.nama}
          </h1>

          <p className="text-gray-600 text-sm md:text-lg mt-1">
            {data.prodi} • Angkatan {data.angkatan}
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed text-sm md:text-base">
            {data.bio}
          </p>

          {/* Info Detail */}
          <div className="mt-6 bg-white/70 backdrop-blur rounded-xl p-4 shadow-sm border border-gray-100 text-sm md:text-base">
            <p className="mb-1">
              <span className="font-semibold text-gray-800">Email:</span>{" "}
              {data.email}
            </p>
            <p className="mb-1">
              <span className="font-semibold text-gray-800">Telp:</span>{" "}
              {data.telepon}
            </p>
            <p>
              <span className="font-semibold text-gray-800">NIM:</span>{" "}
              {data.nim}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
