// hooks/useProducts.ts
import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  stars: number;
  otziv: number;
}

const fetchProducts = async (): Promise<Product[]> => {
  const response = await api.get("/api/products/");
  return response.data;
};

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
