import { useMemo, useRef, useState } from "react";

const API_URL = import.meta.env.VITE_CHAT_API_URL || "";
const API_KEY = import.meta.env.VITE_CHAT_API_KEY || "";
const CLIENT_ID = import.meta.env.VITE_CHAT_CLIENT_ID || "default";

const starterMessages = [
  {
    role: "assistant",
    content:
      "Hi, I am your AI support assistant. Ask a product question, report an issue, or request a human handoff to see the escalation flow.",
  },
];

function buildDemoReply(message, previousMessages) {
  const lowered = message.toLowerCase();
  const emailMatch = message.match(/[\w.-]+@[\w.-]+/);
  const waitingForEmail = previousMessages.some(
    (item) =>
      item.role === "assistant" && item.content.toLowerCase().includes("provide your email")
  );

  if (waitingForEmail && emailMatch) {
    return "Thank you. I have captured your email and escalated this to a human agent. This mirrors the live FastAPI + n8n handoff flow.";
  }

  if (["issue", "refund", "support", "complaint", "human", "cancel"].some((term) => lowered.includes(term))) {
    if (emailMatch) {
      return "I understand your concern. I have escalated this to a human agent and attached your email for follow-up.";
    }

    return "I am sorry about that. Can you please provide your email so a support agent can assist you?";
  }

  return "This portfolio demo can answer FAQs, collect customer context, and escalate to human support when needed. Connect the live API to replace this fallback with the real backend.";
}

export default function ChatPortfolio() {
  const [messages, setMessages] = useState(starterMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const sessionIdRef = useRef(
    globalThis.crypto?.randomUUID?.() || `demo-${Math.random().toString(36).slice(2, 10)}`
  );

  const isLive = useMemo(() => Boolean(API_URL), []);

  async function sendMessage(event) {
    event.preventDefault();
    const nextInput = input.trim();
    if (!nextInput || loading) {
      return;
    }

    const userMessage = { role: "user", content: nextInput };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setError("");

    if (!isLive) {
      const reply = buildDemoReply(nextInput, nextMessages);
      setMessages([...nextMessages, { role: "assistant", content: reply }]);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL.replace(/\/$/, "")}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(API_KEY ? { "X-API-Key": API_KEY } : {}),
        },
        body: JSON.stringify({
          session_id: sessionIdRef.current,
          client_id: CLIENT_ID,
          message: nextInput,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      setMessages([...nextMessages, { role: "assistant", content: data.response }]);
    } catch (requestError) {
      setError("Live API unavailable. Showing fallback demo mode instead.");
      const fallbackReply = buildDemoReply(nextInput, nextMessages);
      setMessages([...nextMessages, { role: "assistant", content: fallbackReply }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="chat-demo" className="py-24 px-6 bg-stone-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">
              Live Portfolio Demo
            </p>
            <h2 className="text-3xl md:text-4xl font-black">AI Support Chat Template</h2>
            <p className="text-stone-400 mt-3 max-w-3xl">
              This is the reusable support chat system I can brand for each client. It handles FAQ replies,
              session memory, escalation to human agents, webhook handoffs, and PostgreSQL-backed persistence.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${isLive ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30" : "bg-amber-500/10 text-amber-300 border border-amber-500/30"}`}>
              <span className={`h-2 w-2 rounded-full ${isLive ? "bg-emerald-400" : "bg-amber-400"}`} />
              {isLive ? "Live API mode" : "Demo fallback mode"}
            </span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-stone-800 bg-stone-950 shadow-2xl shadow-black/30 overflow-hidden">
            <div className="flex items-center justify-between border-b border-stone-800 px-5 py-4">
              <div>
                <p className="text-sm font-semibold text-white">Support Assistant Demo</p>
                <p className="text-xs text-stone-500">FastAPI, OpenAI, PostgreSQL, n8n handoff</p>
              </div>
              <div className="text-xs text-stone-500">Session: {sessionIdRef.current.slice(0, 8)}</div>
            </div>

            <div className="space-y-4 px-5 py-5 h-[520px] overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${message.role === "user" ? "bg-gradient-to-r from-amber-600 to-orange-700 text-white" : "bg-stone-900 border border-stone-800 text-stone-200"}`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl border border-stone-800 bg-stone-900 px-4 py-3 text-sm text-stone-400">
                    Thinking...
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={sendMessage} className="border-t border-stone-800 p-4">
              <div className="flex flex-col gap-3 md:flex-row">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Try: I have an issue with my order"
                  className="flex-1 rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-500"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-2xl bg-gradient-to-r from-amber-600 to-orange-700 px-5 py-3 text-sm font-semibold text-white transition hover:from-amber-500 hover:to-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Send Message
                </button>
              </div>
              {error && <p className="mt-3 text-xs text-amber-300">{error}</p>}
            </form>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-stone-800 bg-stone-950 p-6">
              <h3 className="text-xl font-bold mb-4">What clients are seeing here</h3>
              <ul className="space-y-3 text-sm text-stone-400">
                <li className="flex gap-2"><span className="text-amber-400">✦</span><span>Multi-turn session memory that keeps context across messages.</span></li>
                <li className="flex gap-2"><span className="text-amber-400">✦</span><span>Escalation logic that captures support issues and requests an email when needed.</span></li>
                <li className="flex gap-2"><span className="text-amber-400">✦</span><span>Webhook handoff to n8n or CRM tools for human support routing.</span></li>
                <li className="flex gap-2"><span className="text-amber-400">✦</span><span>PostgreSQL-backed persistence, API auth, and deploy-ready FastAPI architecture.</span></li>
              </ul>
            </div>

            <div className="rounded-3xl border border-stone-800 bg-gradient-to-br from-stone-950 to-stone-900 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500 mb-3">Recommended demo prompts</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "I have an issue with my delivery",
                  "Can I speak to a human agent?",
                  "My email is client@example.com",
                ].map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => setInput(prompt)}
                    className="rounded-full border border-stone-700 px-3 py-2 text-xs text-stone-300 transition hover:border-amber-500 hover:text-white"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-stone-800 bg-stone-950 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500 mb-3">Deployment stack</p>
              <div className="flex flex-wrap gap-2">
                {["Cloudflare Pages", "FastAPI API", "Supabase Postgres", "n8n", "OpenAI"].map((item) => (
                  <span key={item} className="rounded-full bg-stone-800 px-3 py-1.5 text-xs text-stone-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}