'use client';

import { useRouter } from "next/navigation";

export default function Pagination({
    currentPage,
} : {
    currentPage: number,
}) {
  const router = useRouter();
  const handlePrevPage = () => {
    if (currentPage > 1) {
      router.push(`?page=${currentPage - 1}`)
    }
  };

  const handleNextPage = () => {
    router.push(`?page=${currentPage + 1}`)
  };


  return (
    <div>
      <div className="flex justify-center items-center gap-4 mt-8 mb-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-purple-500 hover:bg-purple-600 text-white"
          }`}
        >
          Previous
        </button>
        <span className="text-lg font-semibold text-purple-800">
          {currentPage}
        </span>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white"
        >
          Next
        </button>
      </div>
    </div>
  )
}
