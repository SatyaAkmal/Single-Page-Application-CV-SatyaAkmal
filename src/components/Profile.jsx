import React from "react";

export default function Profile({ data }) {
  return (
    <section id="profile" className="p-6 bg-white rounded-lg shadow-sm">
      <div className="flex gap-6 items-center">
        <img src={data.foto} alt={`${data.nama} foto`} className="w-28 h-28 rounded-full object-cover"/>
        <div>
          <h1 className="text-2xl font-semibold">{data.nama}</h1>
          <p className="text-sm text-gray-600">{data.prodi} • Angkatan {data.angkatan}</p>
          <p className="mt-2 text-gray-700">{data.bio}</p>
          <div className="mt-3 text-sm text-gray-500">
            <div>Email: {data.email}</div>
            <div>Telp: {data.telepon}</div>
            <div>NIM: {data.nim}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
