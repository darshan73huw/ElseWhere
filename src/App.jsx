import { useMemo, useState } from 'react'
import AboutSection from './components/AboutSection.jsx'
import DestinationsSection from './components/DestinationsSection.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import HeroSection from './components/HeroSection.jsx'
import NewsletterSection from './components/NewsletterSection.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import { destinations } from './data/destinations.js'

function App() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All places')
  const [savedIds, setSavedIds] = useState([])
  const [savedOnly, setSavedOnly] = useState(false)

  const visibleDestinations = useMemo(() => {
    const searchTerm = query.trim().toLowerCase()

    return destinations.filter((destination) => {
      const matchesCategory =
        activeCategory === 'All places' ||
        destination.category === activeCategory
      const matchesSearch =
        !searchTerm ||
        `${destination.name} ${destination.country} ${destination.category}`
          .toLowerCase()
          .includes(searchTerm)
      const matchesSaved = !savedOnly || savedIds.includes(destination.id)

      return matchesCategory && matchesSearch && matchesSaved
    })
  }, [activeCategory, query, savedIds, savedOnly])

  function toggleSaved(id) {
    setSavedIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((savedId) => savedId !== id)
        : [...currentIds, id],
    )
  }

  function showSavedTrips() {
    setSavedOnly((current) => !current)
    setActiveCategory('All places')
    document.getElementById('discover')?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleSearch(event) {
    event.preventDefault()
    document.getElementById('discover')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen overflow-hidden bg-cream text-ink">
      <SiteHeader
        savedCount={savedIds.length}
        savedOnly={savedOnly}
        onShowSaved={showSavedTrips}
      />
      <main>
        <HeroSection
          query={query}
          onQueryChange={(value) => {
            setQuery(value)
            setSavedOnly(false)
          }}
          onSearch={handleSearch}
        />
        <DestinationsSection
          activeCategory={activeCategory}
          destinations={visibleDestinations}
          query={query}
          savedIds={savedIds}
          savedOnly={savedOnly}
          onCategoryChange={(category) => {
            setActiveCategory(category)
            setSavedOnly(false)
          }}
          onClearFilters={() => {
            setQuery('')
            setActiveCategory('All places')
            setSavedOnly(false)
          }}
          onSavedOnlyChange={() => setSavedOnly((current) => !current)}
          onToggleSaved={toggleSaved}
        />
        <AboutSection />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
