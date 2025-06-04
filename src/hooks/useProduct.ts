import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  stock_quantity: number;
  stars: number;
  otziv: number;
}

const fetchProductById = async (id: number): Promise<Product> => {
  const response = await api.get(`/api/products/${id}`);
  return response.data;
};

export const useProduct = (id: number) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id, // id mavjud bo'lsa so'rov yuboriladi
  });
};
