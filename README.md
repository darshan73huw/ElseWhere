# Elsewhere

A React and Tailwind CSS travel-discovery landing page.

## Run locally

From this directory, install dependencies and start the development server:

```sh
npm install
npm run dev
```

Create a production build with `npm run build`, or check the code with `npm run lint`.

## Source structure

```text
src/
├── App.jsx                     # Page composition and shared destination state
├── main.jsx                    # React application entry point
├── index.css                   # Tailwind directives and global styles
├── components/
│   ├── AboutSection.jsx        # About the travel guides
│   ├── DestinationCard.jsx     # One destination card
│   ├── DestinationsSection.jsx # Destination filters and card grid
│   ├── HeroSection.jsx         # Intro, search, and featured image
│   ├── Icon.jsx                # Shared inline SVG icons
│   ├── NewsletterSection.jsx  # Newsletter signup form
│   ├── SiteFooter.jsx          # Page footer
│   └── SiteHeader.jsx          # Navigation and saved-place shortcut
└── data/
    └── destinations.js         # Destination entries and filter categories
```

`App.jsx` connects the page sections and owns state shared between them, such
as destination search, category filters, and saved places. Each section lives
in its own component so it can be edited independently while still rendering
as one complete page.
