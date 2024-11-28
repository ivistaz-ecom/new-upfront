"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState(""); // State to track search input
  const router = useRouter();

  const handleSearch = () => {
    if (!searchQuery.trim()) return; // Prevent empty searches
    router.push(`/search-results?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <>
      <div className="relative flex items-center w-full max-w-sm min-w-[200px] px-3 lg:px-0">
        <div class="relative">
          <input
            type="text"
            className="w-60 placeholder:text-gray-500  bg-gray-200 text-black text-sm border border-gray-300 rounded-none pl-3 py-2 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-black shadow-sm mr-2"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch(); // Trigger search on Enter key press
            }}
          />

          <button
            class="absolute top-1  right-3 flex items-center rounded bg-black py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={handleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clip-rule="evenodd"
              />
            </svg>
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
