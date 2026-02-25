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

    if (res.ok) setSuccess(true);

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black px-8 py-20">
      <div className="w-full space-y-12">

        {/* HEADLINE */}
        <h1 className="text-3xl md:text-4xl tracking-wide">
          A1 PROTOCOL:<br/><br/> INSTITUTIONAL STRATEGY CONSOLE
        </h1>

        {/* SUBHEADLINE + BLINK CURSOR */}
        <p className="text-zinc-300 text-lg">
          Membership Restricted. Currently verifying applicants for the Founding 100
          <span className="animate-pulse ml-1">_</span>
        </p>

        {/* SYSTEM STATUS */}
        <div className="border border-zinc-700 px-4 py-3 text-zinc-200 text-center tracking-widest">
          [SYS_STATUS]: 87_FOUNDING_SEATS_REMAINING
        </div>

        {/* PROPOSITION */}
        <div className="text-zinc-300 space-y-4">
          <p>
            The A1 Protocol is a high-intensity strategic ritual. One 60-minute
            session every 24 hours. 3 Executive Artifacts. Zero fluff. For A and
            B-tier clientele only.
          </p>

          <p>
            Founding Membership: $99/mo. Includes priority access to specialized
            suites and lifetime price protection. Once the Founding 100 seats are
            filled, the gate closes.
          </p>
        </div>

        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-6 pt-6 max-w-xl">

            <input
              type="email"
              required
              placeholder="ENTER_EMAIL"
              className="w-full bg-black border border-white px-4 py-3 text-white focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full border border-white px-4 py-3 text-white hover:bg-white hover:text-black transition"
            >
              {loading ? "PROCESSING..." : "> INITIATE_ACCESS_PROTOCOL"}
            </button>

          </form>
        ) : (
          <div className="pt-6 text-zinc-200">
            Application Received.
            <br />
            If your profile meets Protocol criteria, an Initiation Link will be dispatched.
            <br />
            Seats are filled in order of verification.
          </div>
        )}

      </div>
    </main>
  );
}