import Icon from './Icon.jsx'

function AboutSection() {
  return (
    <section
      className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:px-12 lg:py-24"
      id="about"
    >
      <div>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-clay">
          The elsewhere feeling
        </p>
        <h2 className="max-w-md font-display text-4xl leading-[1.05] tracking-[-0.055em] sm:text-5xl">
          Travel that feels like
          <span className="font-editorial italic text-moss"> you.</span>
        </h2>
        <p className="mt-5 max-w-md text-sm leading-7 text-ink/60">
          No frantic bucket lists. No copy-paste itineraries. Just honest local
          details and room in the day to see where it takes you.
        </p>
        <a
          className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-moss"
          href="#journal"
        >
          Get to know us
          <Icon className="h-4 w-4" name="arrowRight" />
        </a>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <img
          alt="A quiet cafe terrace on a sunny afternoon"
          className="h-44 w-full rounded-[1.25rem] object-cover sm:h-60"
          loading="lazy"
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=85"
        />
        <img
          alt="A winding stone path through a green landscape"
          className="mt-7 h-44 w-full rounded-[1.25rem] object-cover sm:mt-10 sm:h-60"
          loading="lazy"
          src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=85"
        />
      </div>
    </section>
  )
}

export default AboutSection
