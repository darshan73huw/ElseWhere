import Icon from './Icon.jsx'

function DestinationCard({
  destination,
  index,
  isFeatured,
  isSaved,
  onToggleSaved,
}) {
  return (
    <article className="group min-w-0">
      <div className="relative aspect-[1.22/1] overflow-hidden rounded-[1.35rem] bg-cream">
        <img
          alt={destination.imageAlt}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
          loading="lazy"
          src={destination.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5 opacity-70" />
        {isFeatured && index === 0 && (
          <span className="absolute left-4 top-4 rounded-full bg-cream px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.13em] text-moss">
            A favorite
          </span>
        )}
        <button
          aria-label={
            isSaved
              ? `Remove ${destination.name} from saved places`
              : `Save ${destination.name}`
          }
          aria-pressed={isSaved}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition ${
            isSaved
              ? 'bg-clay text-white'
              : 'bg-white/90 text-ink hover:bg-white hover:text-clay'
          }`}
          onClick={() => onToggleSaved(destination.id)}
          type="button"
        >
          <Icon className="h-[18px] w-[18px]" name="heart" />
        </button>
        <span className="absolute bottom-4 left-4 rounded-full border border-white/40 bg-black/20 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-md">
          {destination.category}
        </span>
      </div>
      <div className="flex items-start justify-between gap-3 pt-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/40">
            {destination.country}
          </p>
          <h3 className="mt-1 font-display text-[1.65rem] leading-tight tracking-[-0.04em]">
            {destination.name}
          </h3>
          <p className="mt-1.5 text-xs text-ink/55">{destination.detail}</p>
        </div>
        <span className="mt-1 flex shrink-0 items-center gap-1 text-[10px] text-ink/45">
          <Icon className="h-3.5 w-3.5" name="pin" />
          {destination.days}
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-3">
        <p className="text-[10px] text-ink/45">
          Thoughtful stays from{' '}
          <span className="font-semibold text-ink">{destination.price}</span>
        </p>
        <a
          aria-label={`Explore ${destination.name}`}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 transition group-hover:border-moss group-hover:bg-moss group-hover:text-white"
          href="#journal"
        >
          <Icon className="h-4 w-4" name="arrow" />
        </a>
      </div>
    </article>
  )
}

export default DestinationCard
