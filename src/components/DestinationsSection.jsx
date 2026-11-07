import { categories } from '../data/destinations.js'
import DestinationCard from './DestinationCard.jsx'
import Icon from './Icon.jsx'

function DestinationsSection({
  activeCategory,
  destinations,
  query,
  savedIds,
  savedOnly,
  onCategoryChange,
  onClearFilters,
  onSavedOnlyChange,
  onToggleSaved,
}) {
  const isFeatured = !savedOnly && activeCategory === 'All places' && !query

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" id="discover">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-clay">
              A good place to start
            </p>
            <h2 className="font-display text-4xl tracking-[-0.055em] sm:text-5xl">
              Places with a pulse.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-ink/55">
              The neighborhood bakery, the little-known lookout, the table
              you&apos;ll talk about for years. Start anywhere.
            </p>
          </div>
          <button
            className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition ${
              savedOnly
                ? 'bg-moss text-white'
                : 'border border-ink/10 text-ink/70 hover:border-moss/40 hover:text-moss'
            }`}
            onClick={onSavedOnlyChange}
            type="button"
          >
            <Icon className="h-4 w-4" name="heart" />
            {savedOnly ? 'Showing saved' : `Saved places (${savedIds.length})`}
          </button>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-4">
          <div aria-label="Filter destinations" className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                aria-pressed={activeCategory === category}
                className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                  activeCategory === category
                    ? 'bg-moss text-white'
                    : 'bg-cream text-ink/60 hover:bg-moss/10 hover:text-moss'
                }`}
                key={category}
                onClick={() => onCategoryChange(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
          <p aria-live="polite" className="text-xs text-ink/45">
            {destinations.length} thoughtfully picked places
          </p>
        </div>

        {destinations.length > 0 ? (
          <div className="mt-7 grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination, index) => (
              <DestinationCard
                destination={destination}
                index={index}
                isFeatured={isFeatured}
                isSaved={savedIds.includes(destination.id)}
                key={destination.id}
                onToggleSaved={onToggleSaved}
              />
            ))}
          </div>
        ) : (
          <div className="mt-7 rounded-3xl bg-cream px-6 py-16 text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-moss/10 text-moss">
              <Icon className="h-5 w-5" name="search" />
            </span>
            <h3 className="mt-4 font-display text-2xl tracking-tight">
              No places found just yet.
            </h3>
            <p className="mt-2 text-sm text-ink/55">
              Try another search, or save a place to find it here later.
            </p>
            <button
              className="mt-5 text-xs font-semibold text-moss underline underline-offset-4"
              onClick={onClearFilters}
              type="button"
            >
              Show every place
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default DestinationsSection
