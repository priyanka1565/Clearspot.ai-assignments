import { useState } from "react";
import { useSites } from "../hooks/useSites";

const SiteList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, isFetching } = useSites(page);

  if (isLoading) {
    return <p className="text-center py-8 text-gray-500">Loading sites...</p>;
  }

  if (error) {
    return <p className="text-center py-8 text-red-600">Error loading sites</p>;
  }

  const totalPages = data?.pagination.total ?? 1;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Sites</h2>

      {/* Cards */}
      <div className="space-y-3 mb-8">
        {data?.sites.map((site) => (
          <div
            key={site.id}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-900">{site.name}</h3>
              <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {site.capacity}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-4 justify-center items-center">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-5 py-2 bg-gray-200 rounded-lg font-medium disabled:opacity-50"
        >
          Prev
        </button>

        <span className="text-gray-700 font-medium">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="px-5 py-2 bg-blue-500 text-white rounded-lg font-medium disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {isFetching && (
        <p className="text-center mt-4 text-sm text-gray-400">
          Updating data…
        </p>
      )}
    </div>
  );
};

export default SiteList;
