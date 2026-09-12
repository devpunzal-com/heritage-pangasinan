"use client";

import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(search);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search heritage sites..."
        aria-label="Search heritage sites"
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}