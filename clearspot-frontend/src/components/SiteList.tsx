import { useState } from "react";
import { useSites } from "../hooks/useSites";

const SiteList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useSites(page);

  if (isLoading) return <p>Loading sites...</p>;
  if (error) return <p>Error loading sites</p>;

  return (
    <div>
      <h2>Sites</h2>
      {data?.sites.map((site) => (
        <div key={site.id}>
          {site.name} – Capacity: {site.capacity}
        </div>
      ))}

      <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>Prev</button>
      <button onClick={() => setPage(p => p + 1)}>Next</button>
    </div>
  );
};

export default SiteList;
