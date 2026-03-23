// src/components/Contact.jsx
import { useState } from "react";

const EMAIL = "femi@insightloopai.com";

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
    <section id="contact" className="py-24 px-6 bg-stone-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left info panel */}
          <div className="flex flex-col justify-center">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">Contact</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Let's Work Together</h2>
            <p className="text-stone-400 leading-relaxed mb-8">
              Need an AI automation consultant, an n8n automation builder, or a RAG chatbot developer?
              I work remotely with clients worldwide and usually respond within 24 hours.
            </p>

            {/* Availability */}
            <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3 mb-8 w-fit">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shrink-0" />
              <span className="text-green-400 text-sm font-medium">Available for new projects</span>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-stone-400 hover:text-stone-100 group transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-stone-800 group-hover:bg-stone-700 flex items-center justify-center transition-colors">
                  ✉
                </div>
                <span className="text-sm">{EMAIL}</span>
              </a>
              <a
                href="https://www.fiverr.com/s/381LN3B"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-stone-400 hover:text-stone-100 group transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-stone-800 group-hover:bg-stone-700 flex items-center justify-center text-green-400 font-bold transition-colors">
                  f
                </div>
                <span className="text-sm">Fiverr Profile</span>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0181c3a41fc2bcb53a?mp_source=share"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-stone-400 hover:text-stone-100 group transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-stone-800 group-hover:bg-stone-700 flex items-center justify-center text-green-500 font-bold transition-colors">
                  ↑
                </div>
                <span className="text-sm">Upwork Profile</span>
              </a>
            </div>

            <p className="mt-8 text-sm text-stone-500 leading-relaxed max-w-md">
              Service area: remote worldwide. I support startups, agencies, consultants, and internal operations teams that need practical AI systems shipped fast.
            </p>
          </div>

          {/* Right form */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-stone-400">
                  Your email client should have opened —<br />
                  I'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="text-xs text-stone-500 uppercase tracking-widest mb-1.5 block">Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-stone-500 uppercase tracking-widest mb-1.5 block">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="your@company.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-stone-500 uppercase tracking-widest mb-1.5 block">Project Details</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe what you need built — the more detail, the better."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 px-6 py-3.5 rounded-xl font-semibold transition-all hover:scale-[1.02] shadow-lg shadow-amber-950/20"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
