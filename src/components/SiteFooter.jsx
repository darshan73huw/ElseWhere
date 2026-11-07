function SiteFooter() {
  return (
    <footer className="bg-ink px-5 py-7 text-white/55 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between">
        <a
          aria-label="Elsewhere home"
          className="font-display text-xl tracking-[-0.06em] text-white"
          href="#home"
        >
          elsewhere<span className="text-clay">.</span>
        </a>
        <p>For the love of getting a little lost.</p>
        <p>© 2025 Elsewhere Travel Co.</p>
      </div>
    </footer>
  )
}

export default SiteFooter
