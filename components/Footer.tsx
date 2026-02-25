import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-10 py-10 text-sm text-zinc-400">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center space-y-6 text-center">

        {/* Legal Links */}
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

        {/* Company Info */}
        <div className="space-y-1">
          <p className="text-zinc-300">
            Crowbar Ventures Limited | London
          </p>
          <p>
            71-75 Shelton Street, Covent Garden, London, WC2H 9JQ United Kingdom
          </p>

          <p>© 2026 Crowbar Ventures Ltd. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}