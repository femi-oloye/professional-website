// src/components/Contact.jsx
import { useState } from "react";

const EMAIL = "your@email.com"; // <-- replace with your actual email

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
        <p className="text-gray-400 mb-8">
          Available for freelance and contract projects. Describe what you need
          and I'll get back to you within 24 hours.
        </p>

        {sent ? (
          <div className="bg-green-900/40 border border-green-700 rounded-xl p-6 text-green-300">
            Your email client should have opened — I'll get back to you soon!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Describe your project — what do you need automated or built?"
              value={form.message}
              onChange={handleChange}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Send Message
            </button>
          </form>
        )}

        <p className="mt-6 text-gray-500 text-sm">
          Prefer a direct email?{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            {EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
