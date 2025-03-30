'use client';

import { useRouter } from "next/navigation";

export default function Pagination({
    currentPage,
} : {
    currentPage: number,
}) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    if (page < 1) return;
    router.push(`?page=${page}`);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 3;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = startPage + maxVisiblePages - 1;

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 rounded-md transition-all duration-200 ${
            currentPage === i
              ? "bg-purple-500 text-white shadow-md"
              : "hover:bg-purple-100 text-purple-800"
          }`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center gap-1 px-3 py-1 rounded-md transition-all duration-200 ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-purple-800 hover:bg-purple-100"
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Prev</span>
        </button>

        <div className="flex items-center gap-1 px-2">
          {renderPageNumbers()}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="flex items-center gap-1 px-3 py-1 rounded-md transition-all duration-200 text-purple-800 hover:bg-purple-100"
        >
          <span>Next</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
