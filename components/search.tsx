'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();
  const params = useSearchParams();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateQuery(e.target.value);
  };

  const updateQuery = (newQuery: string) => {
    const currentParams = new URLSearchParams(params.toString());
    const currentPage = currentParams.get('page') || '1';
    
    if (newQuery) {
      currentParams.set('search', newQuery);
    } else {
      currentParams.delete('search');
    }
    
    currentParams.set('page', currentPage);
    router.push(`?${currentParams.toString()}`, { scroll: false });
  };

  return (
    <div className="max-w-md mx-auto mb-8">
      <input
        type="text"
        placeholder="Search Pokemon by name..."
        value={params.get('search') || ''}
        onChange={handleSearch}
        className="w-full px-4 py-2 rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:outline-none shadow-sm"
      />
    </div>
  );
}