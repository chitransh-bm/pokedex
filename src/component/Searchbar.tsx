'use client'
import { useRouter, useSearchParams } from "next/navigation";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const Searchbar = ({ history }: any) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('query') || ''; // Read the initial query from URL search params
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);

  useEffect(() => {
    // Construct the path dynamically based on searchQuery
    router.push(`/pokedex${searchQuery === '' ? '' : `/${searchQuery}`}`);
  }, [searchQuery, router]);
  return (
    <div className="pb-4">
      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <h1>as;lkdaljdalksjdahfkjds hakjs</h1>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
            <svg
              className="w-6 h-6 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-12 p-4"
            placeholder="Search..."
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
