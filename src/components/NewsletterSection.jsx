import { useState } from 'react'
import Icon from './Icon.jsx'

function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(event) {
    event.preventDefault()
    setSubscribed(true)
    setEmail('')
  }

  return (
    <section
      className="bg-moss px-5 py-16 text-cream sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      id="journal"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-cream/55">
            Notes from elsewhere
          </p>
          <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.055em] sm:text-5xl">
            A little inspiration,
            <br />
            delivered slowly.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-cream/65">
            Occasional field notes, places to linger, and stories worth taking
            the scenic route for.
          </p>
        </div>
        <div className="w-full max-w-md">
          {subscribed ? (
            <p
              aria-live="polite"
              className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm"
              role="status"
            >
              You&apos;re on the list. Look out for a little note from us.
            </p>
          ) : (
            <form
              className="flex gap-2 rounded-2xl bg-white p-2"
              onSubmit={handleSubscribe}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Your email address
              </label>
              <input
                className="min-w-0 flex-1 bg-transparent px-3 text-sm text-ink outline-none placeholder:text-ink/40"
                id="newsletter-email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                required
                type="email"
                value={email}
              />
              <button
                className="flex shrink-0 items-center gap-2 rounded-xl bg-clay px-4 py-3 text-[11px] font-bold uppercase tracking-wide text-white transition hover:bg-ink sm:px-5"
                type="submit"
              >
                Count me in
                <Icon className="h-4 w-4" name="arrowRight" />
              </button>
            </form>
          )}
          <p className="mt-3 pl-1 text-[10px] text-cream/45">
            The occasional good thing. Never the noisy thing.
          </p>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
