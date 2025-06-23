// hooks/useCategories.ts
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";

export interface Category {
  id: number;
  name: string;
  slug: string; // or `category` if that's what your backend uses
}

const fetchCategories = async (): Promise<Category[]> => {
  const response = await api.get("/api/categories/");
  return response.data;
};

export const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};
