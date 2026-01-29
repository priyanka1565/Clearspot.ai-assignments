import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/apiClient";
import type { SiteResponse } from "../api/types/site";

export const useSites = (page: number) => {
  return useQuery({
    queryKey: ["sites", page],
    queryFn: async () => {
  const data = await apiClient.get<any[]>("/posts");

  return {
    sites: data.slice(0, 5).map((item) => ({
      id: String(item.id),
      name: item.title,
      capacity: 10,
    })),
    pagination: { page: 1, total: 5 },
  };
}

  });
};
