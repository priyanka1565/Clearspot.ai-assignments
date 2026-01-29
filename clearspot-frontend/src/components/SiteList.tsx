import { useState } from "react";
import { useSites } from "../hooks/useSites";

const SiteList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useSites(page);
  console.log("Current page:", page);

  if (isLoading) return <p className="text-center py-8 text-gray-600">Loading sites...</p>;
  if (error) return <p className="text-center py-8 text-red-600">Error loading sites</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Sites</h2>
      
      <div className="space-y-3 mb-8">
        {data?.sites.map((site) => (
          <div
            key={site.id}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-900">{site.name}</h3>
              <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                {site.capacity}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 justify-center">
        <button
          onClick={() => {
            console.log("Prev clicked");
            setPage((p) => Math.max(p - 1, 1));
          }}
          className="px-6 py-2 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={page === 1}
        >
          Prev
        </button>

        <div className="flex items-center px-4 py-2 text-gray-700 font-medium">
          Page {page}
        </div>

        <button
          onClick={() => {
            console.log("Next clicked");
            setPage((p) => p + 1);
          }}
          className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SiteList;