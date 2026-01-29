import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../api/apiClient";

type Site = {
  id: string;
  name: string;
  capacity: number;
};

export const useCreateSite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (name: string) => {
      return apiClient.post("/api/sites", { name });
    },

   
    onMutate: async (name: string) => {
      await queryClient.cancelQueries({ queryKey: ["sites"] });

      const previousData = queryClient.getQueryData<any>(["sites", 1]);

      queryClient.setQueryData(["sites", 1], (old: any) => {
        if (!old) return old;

        return {
          ...old,
          sites: [
            {
              id: `temp-${Date.now()}`,
              name,
              capacity: 10,
            },
            ...old.sites,
          ],
        };
      });

      return { previousData };
    },


    onError: (_err, _name, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(["sites", 1], context.previousData);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["sites"] });
    },
  });
};
