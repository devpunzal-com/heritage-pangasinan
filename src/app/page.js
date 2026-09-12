"use client";

import { useState } from "react";
import styles from "./page.module.css";

// GitHub Pages uses /heritage-pangasinan
// Local development uses no base path.
const basePath =
  process.env.NODE_ENV === "production"
    ? "/heritage-pangasinan"
    : "";

// ============================================================
// HERITAGE SITES DATA
// ============================================================

const heritageSites = [
  {
    id: 1,
    name: "Hundred Islands",
    location: "Alaminos City",
    image: "hundreds_island.jpg",
    description:
      "A famous natural attraction in Pangasinan known for its beautiful islands, clear waters, and scenic landscapes.",
  },
  {
    id: 2,
    name: "Bolinao Falls",
    location: "Bolinao, Pangasinan",
    image: "bolinaofalls.jpg",
    description:
      "A beautiful natural attraction featuring refreshing waterfalls surrounded by the scenic landscapes of Bolinao, Pangasinan.",
  },
  {
    id: 3,
    name: "Balungao Hot Spring",
    location: "Balungao, Pangasinan",
    image: "Hotspring.jpg",
    description:
      "A relaxing natural hot spring destination surrounded by greenery and beautiful scenery.",
  },
  {
    id: 4,
    name: "Lingayen Gulf",
    location: "Lingayen, Pangasinan",
    image: "lingayengulf.jpg",
    description:
      "A historic gulf and coastal destination known for its connection to World War II history.",
  },
  {
    id: 5,
    name: "Patar Beach",
    location: "Bolinao, Pangasinan",
    image: "patarbeach.jpg",
    description:
      "A popular beach destination featuring golden sand, blue waters, and beautiful sunsets.",
  },
  {
    id: 6,
    name: "Cape Bolinao",
    location: "Bolinao, Pangasinan",
    image: "lighthouses.jpg",
    description:
      "A scenic coastal area offering beautiful views of the sea and surrounding landscapes.",
  },
];

// ============================================================
// ICONS
// ============================================================

function SearchIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8Zm0 11.2A3.2 3.2 0 1 1 12 6.8a3.2 3.2 0 0 1 0 6.4Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

// ============================================================
// HOME PAGE
// ============================================================

export default function Home() {
  const [search, setSearch] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [selectedSite, setSelectedSite] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // ============================================================
  // SHOW FIRST 3 OR ALL SITES
  // ============================================================

  const visibleSites = showMore
    ? heritageSites
    : heritageSites.slice(0, 3);

  // ============================================================
  // SEARCH FILTER
  // ============================================================

  const filteredSites = visibleSites.filter((site) =>
    `${site.name} ${site.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // ============================================================
  // GET IMAGE URL
  // ============================================================

  const getImageUrl = (imageName) => {
    return `${basePath}/images/${imageName}`;
  };

  // ============================================================
  // NAVIGATION
  // ============================================================

  const scrollToSection = (id) => {
    setMenuOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <main className={styles.page}>

      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <header className={styles.navbar}>
        <div className={styles.brand}>

          <div className={styles.logoWrapper}>
            <img
              src={`${basePath}/images/logo.png`}
              alt="Pangasinan Heritage Logo"
              className={styles.logo}
            />
          </div>

          <span className={styles.brandName}>
            Pangasinan Heritage
          </span>

        </div>

        {/* ====================================================
            NAVIGATION LINKS
        ==================================================== */}

        <nav
          className={`${styles.navLinks} ${
            menuOpen ? styles.navOpen : ""
          }`}
        >
          <button
            className={styles.navActive}
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("heritage")}
          >
            Heritage Sites
          </button>

          <button
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </nav>

        {/* ====================================================
            NAVIGATION ACTIONS
        ==================================================== */}

        <div className={styles.navActions}>

          {/* Search Button */}
          <button
            className={styles.iconButton}
            aria-label="Search heritage sites"
            onClick={() => {
              document
                .getElementById("search")
                ?.focus();

              scrollToSection("heritage");
            }}
          >
            <SearchIcon />
          </button>

          {/* Mobile Menu Button */}
          <button
            className={styles.menuButton}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon />
          </button>

        </div>
      </header>

      {/* ======================================================
          HERO / HOME SECTION
      ====================================================== */}

      <section
        id="home"
        className={styles.hero}
      >
        <div className={styles.heroContent}>

          <p className={styles.heroSmallText}>
            DISCOVER
          </p>

          <h1>
            Explore the Heritage
            <br />
            of Pangasinan
          </h1>

          <p className={styles.heroDescription}>
            Discover the historical places, beautiful
            destinations, and cultural heritage that make
            Pangasinan unique.
          </p>

        </div>
      </section>

      {/* ======================================================
          HERITAGE SECTION
      ====================================================== */}

      <section
        id="heritage"
        className={styles.heritageSection}
      >

        {/* Section Header */}
        <div className={styles.sectionHeader}>

          <div>
            <p className={styles.sectionLabel}>
              EXPLORE
            </p>

            <h2>
              Heritage Sites
            </h2>
          </div>

          {/* Search */}
          <div className={styles.searchWrapper}>

            <SearchIcon />

            <input
              id="search"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              aria-label="Search heritage sites"
            />

            {search && (
              <button
                className={styles.clearButton}
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}

          </div>

        </div>

        {/* ====================================================
            HERITAGE CARDS
        ==================================================== */}

        {filteredSites.length > 0 ? (

          <div className={styles.cardGrid}>

            {filteredSites.map((site) => (

              <article
                key={site.id}
                className={styles.card}
              >

                {/* Image */}
                <div className={styles.imageContainer}>

                  <img
                    src={getImageUrl(site.image)}
                    alt={site.name}
                    className={styles.cardImage}
                  />

                </div>

                {/* Card Content */}
                <div className={styles.cardBody}>

                  <h3>
                    {site.name}
                  </h3>

                  {/* Location */}
                  <div className={styles.location}>

                    <LocationIcon />

                    <span>
                      {site.location}
                    </span>

                  </div>

                  {/* Description */}
                  <p>
                    {site.description}
                  </p>

                  {/* Details Button */}
                  <button
                    className={styles.detailsButton}
                    onClick={() =>
                      setSelectedSite(site)
                    }
                  >
                    View Details
                  </button>

                </div>

              </article>

            ))}

          </div>

        ) : (

          /* ==================================================
             NO SEARCH RESULTS
          ================================================== */

          <div className={styles.noResults}>

            <h3>
              No heritage sites found
            </h3>

            <p>
              Try searching for another place.
            </p>

          </div>

        )}

        {/* ====================================================
            LOAD MORE
        ==================================================== */}

        {!search && heritageSites.length > 3 && (

          <div className={styles.loadMoreWrapper}>

            <button
              className={styles.loadMore}
              onClick={() =>
                setShowMore(!showMore)
              }
            >

              <span>
                ⟳
              </span>

              {showMore
                ? "Show Less"
                : "Load More"}

            </button>

          </div>

        )}

      </section>

      {/* ======================================================
          ABOUT SECTION
      ====================================================== */}

      <section
        id="about"
        className={styles.aboutSection}
      >

        <p className={styles.sectionLabel}>
          ABOUT
        </p>

        <h2>
          About Pangasinan Heritage
        </h2>

        <p>
          Pangasinan Heritage Guide is a digital showcase
          created to help visitors discover and appreciate
          the historical places, cultural landmarks, and
          beautiful destinations of Pangasinan.
        </p>

      </section>

      {/* ======================================================
          CONTACT SECTION
      ====================================================== */}

      <section
        id="contact"
        className={styles.contactSection}
      >

        <p className={styles.sectionLabel}>
          CONTACT
        </p>

        <h2>
          Get in Touch
        </h2>

        <p>
          Learn more about the heritage and attractions
          of Pangasinan.
        </p>

        <p>
          Email: pangasinanheritage@example.com
        </p>

      </section>

      {/* ======================================================
          DETAILS MODAL
      ====================================================== */}

      {selectedSite && (

        <div
          className={styles.modalOverlay}
          onClick={() =>
            setSelectedSite(null)
          }
        >

          <div
            className={styles.modal}
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* Close Button */}
            <button
              className={styles.closeButton}
              onClick={() =>
                setSelectedSite(null)
              }
              aria-label="Close details"
            >
              <CloseIcon />
            </button>

            {/* Modal Image */}
            <img
              src={getImageUrl(selectedSite.image)}
              alt={selectedSite.name}
              className={styles.modalImage}
            />

            {/* Modal Content */}
            <div className={styles.modalBody}>

              <p className={styles.modalLocation}>

                <LocationIcon />

                {selectedSite.location}

              </p>

              <h2>
                {selectedSite.name}
              </h2>

              <p>
                {selectedSite.description}
              </p>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}