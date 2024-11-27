"use client";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

function SearchModal() {
  const [openModal, setOpenModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchTime, setFetchTime] = useState(null); // State for fetch time
  const [resultCount, setResultCount] = useState(0); // State for result count

  useEffect(() => {
    const fetchResults = async () => {
      if (!searchQuery) {
        setResults([]); // Clear results if query is empty
        setResultCount(0);
        setFetchTime(null);
        return;
      }

      setLoading(true);
      const startTime = performance.now(); // Start timer

      try {
        // Fetch results for all categories
        const response = await fetch(
          `https://beta.upfront.global/wp-json/wp/v2/posts?search=${searchQuery}&categories=3,2,5`
        );
        const data = await response.json();
        const endTime = performance.now(); // End timer

        // Update state with results
        setResults(data);
        setResultCount(data.length); // Set the count of results
        setFetchTime((endTime - startTime).toFixed(2)); // Set fetch time in ms
      } catch (error) {
        console.error("Error fetching search results:", error);
      }

      setLoading(false);
    };

    const debounceTimer = setTimeout(() => {
      fetchResults();
    }, 300); // Debounce to avoid excessive API calls

    return () => clearTimeout(debounceTimer); // Cleanup the timer
  }, [searchQuery]);

  return (
    <div className=" text-black">
      <button
        className="block cursor-pointer text-center text-2xl text-white focus:outline-none focus:ring-0 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setOpenModal(true)}
      >
        <FaSearch />
      </button>

      {/* Modal */}
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden={!openModal} // aria-hidden for accessibility
        className={`fixed inset-x-0 top-0 z-50 max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 ${
          openModal ? "flex h-screen bg-black/80" : "hidden"
        }`}
      >
        <div className="relative max-h-full w-full max-w-2xl p-4">
          <button
            type="button"
            className="absolute -top-6 right-4 ms-auto inline-flex size-8 items-center justify-center rounded-lg bg-gray-200 text-sm text-custom-red hover:bg-custom-red hover:text-white dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setOpenModal(false)} // Close modal on click
          >
            <svg
              className="size-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          {/* Modal content */}
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5 bg-red-600">
              <input
                type="text"
                id="search"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                required
              />
            </div>

            {/* Modal body */}
            <div className="space-y-4 p-4 md:p-5">
              {loading ? (
                <div className="animate-pulse">
                  <div className="mb-2 h-6 rounded bg-gray-200"></div>
                  <div className="mb-2 h-6 rounded bg-gray-200"></div>
                </div>
              ) : (
                <>
                  {resultCount > 0 && (
                    <p className="mb-6 border-b-0 text-red-600">
                      Total <span className="font-semibold">{resultCount}</span>{" "}
                      results
                    </p>
                  )}
                  {results.length > 0 ? (
                    <ul className="h-[200px] overflow-scroll">
                      {results.map((result, index) => {
                        let dynamicUrl = "";

                        if (result.categories.includes(5)) {
                          // For "news-and-publications", use the external URL
                          dynamicUrl =
                            result.acf.news_and_publications_url || "#"; // Ensure there's a fallback
                        } else if (result.categories.includes(3)) {
                          dynamicUrl = `/blogs/${result.slug}`;
                        } else if (result.categories.includes(2)) {
                          dynamicUrl = `/impact-stories/${result.slug}`;
                        }

                        return (
                          <li key={index}>
                            <Link
                              href={dynamicUrl}
                              target={
                                result.categories.includes(5)
                                  ? "_blank"
                                  : "_self"
                              } // Open external links in a new tab
                              className="flex justify-between border-b p-2 hover:text-red-600"
                              onClick={() => {
                                if (!result.categories.includes(5))
                                  setOpenModal(false);
                              }}
                            >
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: result.title.rendered, // Rendered title for formatting
                                }}
                              ></span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    searchQuery && <p>No results found.</p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
