import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/apiClient";
import type { SiteResponse } from "../api/types/site";

const PAGE_SIZE = 5;

export const useSites = (page: number) => {
  return useQuery<SiteResponse>({
    queryKey: ["sites", page],
    queryFn: async () => {
      const data = await apiClient.get<any[]>("/posts");

      const totalPages = Math.ceil(data.length / PAGE_SIZE);
      const start = (page - 1) * PAGE_SIZE;
      const end = start + PAGE_SIZE;

      return {
        sites: data.slice(start, end).map((item) => ({
          id: String(item.id),
          name: item.title,
          capacity: 10,
        })),
        pagination: {
          page,
          total: totalPages,
        },
      };
    },
   placeholderData: (prev) => prev, 
  });
};



