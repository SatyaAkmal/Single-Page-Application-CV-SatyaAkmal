import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    if (loading) return; 
    setLoading(true);

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current, 
        PUBLIC_KEY
      )
      .then(() => {
        alert("✅ Pesan berhasil dikirim!");
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("❌ Pesan gagal dikirim!");
        setLoading(false);
      });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg mt-10 mb-24">
      <h2 className="text-xl font-semibold mb-6 text-gray-700">
        Contact Me
      </h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-5">
        <input
          type="text"
          name="user_name"
          placeholder="Nama Lengkap"
          required
          className="w-full border px-4 py-3 rounded-xl focus:outline-blue-400"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Email"
          required
          className="w-full border px-4 py-3 rounded-xl focus:outline-blue-400"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Pesan..."
          required
          maxLength={500}
          className="w-full border px-4 py-3 rounded-xl focus:outline-blue-400"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition disabled:opacity-60"
        >
          {loading ? "Mengirim..." : "Kirim Pesan"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
