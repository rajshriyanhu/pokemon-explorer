'use client';

export default function PokemonCardSkeleton() {
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-br h-30 mb-30 from-purple-300/50 to-pink-300/50 p-4">
          <div className="w-[200px] h-[200px] mx-auto bg-gray-200 animate-pulse rounded-lg" />
        </div>
        
        <div className="p-6">
          <div className="h-8 w-2/3 mx-auto bg-gray-200 animate-pulse rounded-lg mb-4" />
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="h-5 bg-gray-200 animate-pulse rounded-md" />
            ))}
          </div>
  
          <div className="mb-4">
            <div className="h-5 w-20 bg-gray-200 animate-pulse rounded-md mb-2" />
            <div className="flex flex-wrap gap-2">
              {[...Array(3)].map((_, idx) => (
                <div
                  key={idx}
                  className="h-6 w-16 bg-gray-200 animate-pulse rounded-full"
                />
              ))}
            </div>
          </div>
  
          <div>
            <div className="h-5 w-16 bg-gray-200 animate-pulse rounded-md mb-2" />
            <div className="flex gap-2">
              {[...Array(2)].map((_, idx) => (
                <div
                  key={idx}
                  className="h-6 w-14 bg-gray-200 animate-pulse rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }