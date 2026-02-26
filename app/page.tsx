"use client";

import { useState } from "react";
import Link from "next/link";


export default function Home() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-300 font-mono p-4 md:p-12 selection:bg-zinc-700">
      <div className="max-w-3xl m-auto border border-zinc-800 p-6 md:p-8 bg-black shadow-[0_0_20px_rgba(39,39,42,0.2)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%]"></div>

        <div className="relative z-10">
          <div className="text-xs text-zinc-300 mb-8 flex justify-between">
            <span>[A1_PROTOCOL_CONSOLE_V1.1]</span>
            <span className="animate-pulse">● SYSTEM_LIVE</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tighter uppercase">
            INSTITUTIONAL_STRATEGY_CONSOLE
          </h1>

          <p className="text-sm text-zinc-300 mb-8 border-l-2 border-zinc-700 pl-4">
            Membership Restricted. Verifying Founding 100 Applicants_
          </p>

          <div className="border border-zinc-800 bg-zinc-950 p-4 mb-10 text-center">
            <span className="text-zinc-500 text-xs block mb-1">
              AVAILABILITY_LOG
            </span>
            <span className="text-xl font-bold text-white tracking-widest">
              [87/100_SEATS_REMAINING]
            </span>
          </div>

          <div className="space-y-6 text-sm md:text-base leading-relaxed mb-12">
            <p>
              The A1 Protocol is a high-intensity strategic ritual. One
              60-minute session every 24 hours. 3 Executive Artifacts. Zero
              fluff. A and B-tier clientele only.
            </p>
            <p className="text-zinc-100">
              Founding Membership:{" "}
              <span className="text-white font-bold underline">
                $99 FOR 90 DAYS
              </span>
              . Includes priority access to specialized suites and lifetime
              price protection. Gate closes at 100 seats.
            </p>
          </div>

          <div className="space-y-4">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  required
                  placeholder="ENTER_EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-black border border-zinc-700 p-3 focus:outline-none focus:border-white text-white placeholder:text-zinc-700"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-white text-black font-bold px-8 py-3 hover:bg-zinc-300 transition-colors uppercase"
                >
                  &gt; INITIATE_ACCESS
                </button>
              </div>
            </form>
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-900 text-[10px] text-zinc-400 flex justify-between items-end">
            <div>
              <p>CROWBAR VENTURES LIMITED | LONDON</p>
              <p>71-75 SHELTON ST, WC2H 9JQ</p>
            </div>
            <div className="flex space-x-8">
          <Link
            href="/privacy-policy"
            className="hover:text-white transition"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-of-service"
            className="hover:text-white transition"
          >
            Terms of Service
          </Link>
        </div>
            <div className="text-right">
              <p>[LOG]: INITIATION_QUEUE_ACTIVE</p>
              <p>[LOG]: ZURICH_NODE_CONNECTED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}