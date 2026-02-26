export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-6 text-sm leading-relaxed">

        <h1 className="text-2xl font-semibold">PRIVACY POLICY</h1>

        <p>Last updated: 25th Feb 2026</p>
        <p>Company: A1 Protocol Ltd</p>
        <p>A1 Protocol provides a structured voice-enabled strategy environment.</p>
        <p>This policy explains how we collect, use, and protect personal data.</p>

        <h2 className="font-semibold">Data Collected</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li> Email details</li>
          
        </ul>

        <h2 className="font-semibold">Voice Processing</h2>
        <p>Sessions record and transcribe voice input solely to generate outputs.</p>
        <p>Audio is deleted immediately after transcription.</p>
        <p>We do not use session data to train AI models.</p>

        <h2 className="font-semibold">AI Processing</h2>
        <p>We use secure processors including:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Deepgram (transcription)</li>
          <li>OpenRouter (AI processing)</li>
        </ul>
        <p>They process data only to deliver the service.</p>

        <h2 className="font-semibold">Lawful Basis</h2>
        <p>We rely on:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Contractual necessity</li>
          <li>Legitimate interest</li>
          <li>Explicit consent for voice recording</li>
        </ul>

        <h2 className="font-semibold">Data Retention</h2>
        <p>Audio: deleted immediately</p>
        <p>Transcripts: 24 hours</p>
        <p>Reports: 30 days</p>
        <p>Account data: duration of account + 12 months</p>
        <p>Billing records: 6 years</p>

        <h2 className="font-semibold">International Transfers</h2>
        <p>Data may be processed outside the UK under approved safeguards.</p>

        <h2 className="font-semibold">Your Rights</h2>
        <p>You may request:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>access</li>
          <li>correction</li>
          <li>deletion</li>
          <li>restriction</li>
          <li>portability</li>
        </ul>

        <p>Contact: support@a1protocol.com</p>

        <hr className="border-zinc-700 my-8" />

        <h2 className="font-semibold">NON-ADVISORY DISCLAIMER</h2>
        <p>Add to footer + PDFs:</p>
        <p>
          A1 Protocol is an automated analytical tool and does not provide
          financial, legal, or professional advice. Users remain solely
          responsible for all decisions.
        </p>

        <hr className="border-zinc-700 my-8" />

        <h2 className="font-semibold">VOICE CONSENT (PRE-SESSION)</h2>
        <p>Display before session:</p>
        <p>
          This session records and transcribes your voice to generate structured
          outputs. Your data is processed securely and not used for AI training.
        </p>

        <p>Checkbox (required):</p>
        <p>☐ I consent to voice recording and transcription in accordance with the Privacy Policy.</p>

        <hr className="border-zinc-700 my-8" />

        <h2 className="font-semibold">BILLING & SUBSCRIPTION DISCLOSURE</h2>

        <h3 className="font-semibold">Pricing</h3>
        <p>Fees shown before checkout.</p>
        <p>Charged upfront.</p>

        <h3 className="font-semibold">Subscription Model</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>One session per 24 hours</li>
          <li>No rollover</li>
          <li>Sessions expire</li>
        </ul>

        <h3 className="font-semibold">Renewal</h3>
        <p>Auto-renews unless cancelled before renewal date.</p>

        <h3 className="font-semibold">Cancellation</h3>
        <p>Cancel anytime.</p>
        <p>Access continues until period ends.</p>

        <h3 className="font-semibold">Extensions</h3>
        <p>Extra time or services billed separately.</p>

        <h3 className="font-semibold">Refunds</h3>
        <p>Non-refundable except:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>legal requirement</li>
          <li>verified platform failure</li>
          <li>performance policy</li>
        </ul>

        <h3 className="font-semibold">Cooling-Off Waiver Checkbox</h3>
        <p>☐ I acknowledge that access begins immediately and waive my 14-day cancellation right once sessions are used.</p>

        <hr className="border-zinc-700 my-8" />

        <h2 className="font-semibold">PERFORMANCE GUARANTEE</h2>
        <p>
          If a completed session fails to generate a usable structured brief due
          to a verified technical issue, a session credit may be issued.
        </p>
        <p>
          This guarantee applies only to session delivery and does not guarantee
          any business or decision-making outcomes
        </p>

      </div>
    </main>
  );
}