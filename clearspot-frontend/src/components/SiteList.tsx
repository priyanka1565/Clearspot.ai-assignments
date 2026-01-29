import { useState } from "react";
import { useSites } from "../hooks/useSites";

const SiteList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useSites(page);
  console.log("Current page:", page);


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

     <button
  onClick={() => {
    console.log("Prev clicked");
    setPage((p) => Math.max(p - 1, 1));
  }}
>
  Prev
</button>

<button
  onClick={() => {
    console.log("Next clicked");
    setPage((p) => p + 1);
  }}
>
  Next
</button>

    </div>
  );
};

export default SiteList;
