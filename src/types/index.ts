export interface Category {
  id: number;
  name: string;
  image?: string;
  description?: string;
  slug?: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
  description?: string;
  category_id: number;
  category?: Category;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}
