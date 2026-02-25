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
    <main className="min-h-screen bg-black text-white font-mono px-16 py-20">
      <div className="max-w-3xl space-y-8">

        {/* HEADER */}
        <div className="space-y-2">
          <div className="text-xs tracking-widest text-white">
            [A1_PROTOCOL_CONSOLE]
          </div>

          <h1 className="text-2xl tracking-wide">
            INSTITUTIONAL_STRATEGY_CONSOLE
          </h1>

          <div className="text-sm">
            Membership Restricted. Verifying Founding 100 Applicants<span className="animate-pulse">_</span>
          </div>
        </div>

        {/* STATUS */}
        <div className="border border-white px-4 py-2 text-sm tracking-widest">
          [SYS_STATUS]: 87_FOUNDING_SEATS_REMAINING
        </div>

        {/* CONTENT */}
        <div className="text-sm leading-relaxed space-y-3">
          <p>
            The A1 Protocol is a high-intensity strategic ritual.
            One 60-minute session every 24 hours.
            3 Executive Artifacts.
            Zero fluff.
            A and B-tier clientele only.
          </p>

          <p>
            Founding Membership: $99/mo.
            Priority access to specialized suites.
            Lifetime price protection.
            Gate closes at 100 seats.
          </p>
        </div>

        {/* ACCESS */}
        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-4 pt-6 max-w-md">

            <input
              type="email"
              required
              placeholder="ENTER_EMAIL"
              className="w-full bg-black border border-white px-3 py-2 text-sm focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full border border-white px-3 py-2 text-sm hover:bg-white hover:text-black transition"
            >
              {loading ? "PROCESSING..." : "> INITIATE_ACCESS_PROTOCOL"}
            </button>

          </form>
        ) : (
          <div className="text-sm pt-4">
            Application Received.
            Initiation Link dispatched upon verification.
          </div>
        )}

      </div>
    </main>
  );
}