export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-6 text-sm leading-relaxed">

        <h1 className="text-2xl font-semibold">TERMS OF SERVICE</h1>

        <h2 className="font-semibold">Service Nature</h2>
        <p>A1 Protocol provides automated analytical outputs.</p>
        <p>It does not provide financial, legal, or professional advice.</p>

        <h2 className="font-semibold">Session Entitlement</h2>
        <p>Each subscription includes:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>One 60-minute session per 24 hours</li>
          <li>Strict time limit</li>
          <li>Auto-end at 60 minutes</li>
        </ul>

        <h2 className="font-semibold">No Rollover</h2>
        <p>Unused sessions expire and do not accumulate.</p>

        <h2 className="font-semibold">Technical Failure</h2>
        <p>Verified platform failure → session credit may be issued.</p>

        <h2 className="font-semibold">Acceptable Use</h2>
        <p>Users must not:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>use for unlawful activity</li>
          <li>upload unauthorised confidential data</li>
          <li>attempt to exploit the system</li>
        </ul>

        <h2 className="font-semibold">AI Limitations</h2>
        <p>Outputs may contain errors.</p>
        <p>Users remain responsible for decisions.</p>

        <h2 className="font-semibold">Liability Cap</h2>
        <p>Total liability limited to fees paid.</p>

        <h2 className="font-semibold">Governing Law</h2>
        <p>England & Wales.</p>

      </div>
    </main>
  );
}