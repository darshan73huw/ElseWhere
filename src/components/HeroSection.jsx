import Icon from './Icon.jsx'

function HeroSection({ query, onQueryChange, onSearch }) {
  return (
    <section
      className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pt-16 md:grid-cols-[0.88fr_1.12fr] md:gap-8 md:pb-16 md:pt-10 lg:gap-16 lg:px-12 lg:pb-24 lg:pt-20"
      id="home"
    >
      <div className="relative z-10">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-moss/20 bg-moss/5 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-moss md:mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-clay" />
          A little further, a little slower
        </div>
        <h1 className="max-w-[620px] font-display text-[clamp(3.6rem,7.4vw,6.6rem)] leading-[0.91] tracking-[-0.075em] md:text-[clamp(2.8rem,5.5vw,4.8rem)] md:leading-[0.88] lg:text-[clamp(3.6rem,7.4vw,6.6rem)] lg:leading-[0.91]">
          Find your
          <br />
          <span className="font-editorial italic text-moss">somewhere.</span>
        </h1>
        <p className="mt-7 max-w-[410px] text-[15px] leading-7 text-ink/60 sm:text-base md:mt-4 md:text-sm md:leading-6 lg:text-base">
          Thoughtful little guides for the places that stay with you long after
          you&apos;ve come home.
        </p>

        <form
          className="mt-9 flex max-w-[500px] items-center gap-3 rounded-2xl border border-ink/10 bg-white p-2 shadow-[0_12px_35px_-25px_rgba(27,37,29,0.35)] md:mt-5"
          onSubmit={onSearch}
          role="search"
        >
          <span className="ml-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream text-moss">
            <Icon className="h-[19px] w-[19px]" name="search" />
          </span>
          <input
            aria-label="Search destinations"
            className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink/35"
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search a destination"
            type="search"
            value={query}
          />
          <button
            aria-label="Search destinations"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-moss text-white transition hover:bg-ink sm:w-auto sm:gap-2 sm:px-5"
            type="submit"
          >
            <span className="hidden text-[12px] font-semibold sm:inline">
              Explore
            </span>
            <Icon className="h-4 w-4 sm:hidden" name="arrowRight" />
          </button>
        </form>

        <div className="mt-8 flex items-center gap-4 md:mt-5">
          <div aria-label="Loved by travelers" className="flex -space-x-2">
            {[
              'photo-1534528741775-53994a69daeb',
              'photo-1500648767791-00dcc994a43e',
              'photo-1531123897727-8f129e1688ce',
            ].map((image) => (
              <img
                alt=""
                className="h-8 w-8 rounded-full border-2 border-cream object-cover"
                key={image}
                src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=80&h=80&q=80`}
              />
            ))}
          </div>
          <p className="text-xs text-ink/55">
            <span className="font-semibold text-ink">4.9/5</span> from people
            who went
          </p>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[690px] md:ml-auto">
        <div className="absolute -right-4 -top-5 h-28 w-28 rounded-full border border-clay/30 sm:-right-7 sm:-top-8 sm:h-40 sm:w-40" />
        <div className="absolute -bottom-5 -left-4 h-24 w-24 rounded-full bg-moss/10 sm:-bottom-8 sm:-left-8 sm:h-36 sm:w-36" />
        <div className="relative aspect-[1.14/1] overflow-hidden rounded-[1.6rem] bg-[#d9d4c6] sm:rounded-[2rem] md:aspect-[1.18/1] lg:aspect-[1.14/1]">
          <img
            alt="Pastel-colored villages along the Italian Riviera"
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1500&q=90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5" />
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-md sm:left-7 sm:top-7">
            <Icon className="h-3.5 w-3.5" name="pin" />
            Liguria, Italy
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white sm:bottom-8 sm:left-8 sm:right-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
                The long way around
              </p>
              <p className="mt-1 font-display text-3xl tracking-[-0.04em] sm:text-[2.6rem]">
                Italian Riviera
              </p>
            </div>
            <span className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/50 backdrop-blur-sm sm:flex">
              <Icon className="h-5 w-5" name="arrow" />
            </span>
          </div>
        </div>

        <div className="absolute -bottom-7 right-4 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-[0_16px_45px_-24px_rgba(27,37,29,0.4)] sm:-bottom-8 sm:right-8 sm:p-4 sm:pr-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-clay/10 text-clay">
            <Icon className="h-5 w-5" name="spark" />
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-ink/45">
              Made for the curious
            </p>
            <p className="mt-0.5 text-sm font-semibold">Not just a checklist</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
