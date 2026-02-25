"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setSuccess(true);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-10">
      <div className="max-w-2xl text-center space-y-8">

        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-zinc-100">
          A1 PROTOCOL: INSTITUTIONAL STRATEGY CONSOLE
        </h1>

        <p className="text-zinc-400">
          Membership Restricted. Currently verifying applicants for the Founding 100.
        </p>

        <p className="text-zinc-200 text-lg tracking-widest">
          FOUNDING SEATS REMAINING: <span className="text-white">87/100</span>
        </p>

        <blockquote className="text-zinc-400 italic">
          "The A1 Protocol is a high-intensity strategic ritual. One 60-minute
          session every 24 hours. 3 Executive Artifacts. Zero fluff. For A and
          B-tier clientele only."
        </blockquote>

        <blockquote className="text-zinc-400 italic">
          "Founding Membership: $99/mo. Includes priority access to specialized
          suites and lifetime price protection. Once the Founding 100 seats are
          filled, the gate closes."
        </blockquote>

        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full bg-black border border-zinc-700 px-4 py-3 text-center focus:outline-none focus:border-zinc-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full border border-zinc-700 bg-zinc-900 py-3 text-zinc-200 hover:bg-zinc-800 transition"
            >
              {loading ? "Processing..." : "REQUEST ACCESS"}
            </button>
          </form>
        ) : (
          <p className="text-zinc-200">
            Application Received. If your profile meets the Protocol criteria,
            an Initiation Link will be dispatched to this email. Seats are
            filled in order of verification.
          </p>
        )}

        <footer className="pt-16 text-xs text-zinc-500">
          <p>Crowbar Ventures Limited | London</p>
          <p>
            71-75 Shelton Street, Covent Garden, London, WC2H 9JQ United
            Kingdom
          </p>
        </footer>
      </div>
    </main>
  );
}