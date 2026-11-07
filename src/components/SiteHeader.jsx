import { useState } from 'react'
import Icon from './Icon.jsx'

function SiteHeader({ savedCount, savedOnly, onShowSaved }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  function handleSavedClick() {
    setMobileMenuOpen(false)
    onShowSaved()
  }

  return (
    <header className="relative z-20 border-b border-ink/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a
          aria-label="Elsewhere home"
          className="flex items-center gap-2.5"
          href="#home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-moss text-cream">
            <Icon className="h-[18px] w-[18px]" name="spark" />
          </span>
          <span className="font-display text-[27px] leading-none tracking-[-0.06em]">
            elsewhere<span className="text-clay">.</span>
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-9 text-[13px] font-medium text-ink/65 lg:flex"
        >
          <a className="transition hover:text-ink" href="#discover">
            Destinations
          </a>
          <a className="transition hover:text-ink" href="#about">
            Our way
          </a>
          <a className="transition hover:text-ink" href="#journal">
            Field notes
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-pressed={savedOnly}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-[13px] font-medium transition hover:bg-ink/5 sm:flex"
            onClick={onShowSaved}
            type="button"
          >
            <Icon className="h-4 w-4" name="heart" />
            Saved
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-moss px-1 text-[10px] text-white">
              {savedCount}
            </span>
          </button>
          <a
            className="hidden rounded-full bg-ink px-5 py-3 text-[12px] font-semibold tracking-wide text-white transition hover:bg-moss sm:inline-flex"
            href="#discover"
          >
            FIND YOUR PLACE
          </a>
          <button
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 lg:hidden"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="grid gap-1 border-t border-ink/10 bg-cream px-5 py-4 text-sm sm:px-8 lg:hidden"
        >
          <a
            className="rounded-lg px-3 py-2.5 hover:bg-ink/5"
            href="#discover"
            onClick={() => setMobileMenuOpen(false)}
          >
            Destinations
          </a>
          <a
            className="rounded-lg px-3 py-2.5 hover:bg-ink/5"
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our way
          </a>
          <a
            className="rounded-lg px-3 py-2.5 hover:bg-ink/5"
            href="#journal"
            onClick={() => setMobileMenuOpen(false)}
          >
            Field notes
          </a>
          <button
            className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-left hover:bg-ink/5"
            onClick={handleSavedClick}
            type="button"
          >
            <Icon className="h-4 w-4" name="heart" />
            Saved places ({savedCount})
          </button>
        </nav>
      )}
    </header>
  )
}

export default SiteHeader
