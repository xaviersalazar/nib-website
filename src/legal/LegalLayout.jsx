// Shared chrome + typography for the standalone legal pages (Privacy, Terms).
// Kept deliberately quiet and editorial to match the landing page: warm paper,
// serif headings, generous measure. No animation — these are read, not admired.

export default function LegalLayout({ title, lastUpdated, children }) {
  return (
    <div className="min-h-screen bg-[#F7F7F5] text-black font-sans">
      <div className="max-w-[680px] mx-auto px-6 sm:px-8 py-12 sm:py-16">
        <header className="mb-10 sm:mb-12">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-black/45 hover:text-black transition-colors text-sm mb-9"
          >
            <span aria-hidden="true">←</span> Back to Nib
          </a>
          <div className="font-serif text-2xl tracking-tight mb-7">Nib</div>
          <h1 className="font-serif text-3xl sm:text-4xl tracking-tight leading-[1.1] mb-3">
            {title}
          </h1>
          {lastUpdated && (
            <p className="text-black/45 text-sm">Last updated {lastUpdated}</p>
          )}
        </header>

        <main>{children}</main>

        <footer className="mt-16 pt-7 border-t border-black/10 text-black/40 text-xs flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
          <span>© {new Date().getFullYear()} Nib. All rights reserved.</span>
          <nav className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-black transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-black transition-colors">
              Terms
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
}

// ── Reusable content primitives ───────────────────────────────────────────
// Small, unstyled-on-purpose building blocks so the two pages read the same.

export function Lead({ children }) {
  return (
    <p className="text-base sm:text-lg text-black/70 leading-relaxed mb-10">
      {children}
    </p>
  );
}

export function Section({ title, children }) {
  return (
    <section className="mb-9">
      <h2 className="font-serif text-lg sm:text-xl tracking-tight text-black mb-3">
        {title}
      </h2>
      <div className="space-y-3 text-[15px] leading-relaxed text-black/70">
        {children}
      </div>
    </section>
  );
}

export function Bullets({ items }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5">
          <span aria-hidden="true" className="text-black/30 mt-[2px]">
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
