import React from "react";

//PROFILE//
const Profile = ({ data }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-sky-400 p-10 rounded-2xl shadow-xl text-white w-full">
      <div className="flex items-center gap-8">
        
        <img
          src={data.photo}
          alt="profile"
          className="w-32 h-32 rounded-xl object-cover shadow-lg border-4 border-white/30"
        />

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{data.name}</h1>
          <p className="text-lg opacity-90">{data.title}</p>

          {/* Badges */}
          <div className="flex gap-3 mt-4 text-sm">
            <span className="bg-white/25 px-4 py-1 rounded-lg backdrop-blur-sm">
              {data.nim}
            </span>
            <span className="bg-white/25 px-4 py-1 rounded-lg backdrop-blur-sm">
              {data.major}
            </span>
            <span className="bg-white/25 px-4 py-1 rounded-lg backdrop-blur-sm">
              Angkatan {data.angkatan}
            </span>
          </div>

          {/* Location + views */}
          <div className="mt-3 opacity-90 text-sm flex items-center gap-4">
            <span>📍 {data.location}</span>
            <span>👁 {data.views} views</span>
          </div>

          <p className="mt-3 opacity-90 text-sm">{data.description}</p>

          <a
            href={data.portfolio}
            target="_blank"
            className="mt-5 w-fit bg-white text-blue-700 px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-blue-50 transition"
          >
            Visit Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
