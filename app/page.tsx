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
    <main className="min-h-screen flex items-center justify-center px-6 py-10 bg-black">
      <div className="max-w-2xl text-center space-y-10">

        {/* HEADLINE */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-white">
          A1 PROTOCOL: INSTITUTIONAL STRATEGY CONSOLE
        </h1>

        {/* SUB HEADLINE */}
        <p className="text-zinc-200 text-base md:text-lg">
          Membership Restricted. Currently verifying applicants for the Founding 100.
        </p>

        {/* SEAT COUNTER - STRONG VISIBILITY */}
        <div className="text-xl md:text-2xl font-semibold tracking-widest text-white border border-zinc-700 py-3">
          87/100 SEATS REMAINING
        </div>

        {/* PROPOSITION */}
        <blockquote className="text-zinc-200 leading-relaxed">
          The A1 Protocol is a high-intensity strategic ritual. One 60-minute
          session every 24 hours. 3 Executive Artifacts. Zero fluff. For A and
          B-tier clientele only.
        </blockquote>

        {/* MEMBERSHIP */}
        <blockquote className="text-zinc-200 leading-relaxed">
          Founding Membership: $99/mo. Includes priority access to specialized
          suites and lifetime price protection. Once the Founding 100 seats are
          filled, the gate closes.
        </blockquote>

        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full bg-black border border-zinc-600 px-4 py-3 text-center text-white focus:outline-none focus:border-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full border border-white bg-black py-3 text-white hover:bg-zinc-900 transition"
            >
              {loading ? "Processing..." : "REQUEST ACCESS"}
            </button>
          </form>
        ) : (
          <p className="text-white pt-4">
            Application Received. If your profile meets the Protocol criteria,
            an Initiation Link will be dispatched to this email. Seats are
            filled in order of verification.
          </p>
        )}
      </div>
    </main>
  );
}