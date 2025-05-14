// context/LikedContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  stars: number;
  otziv: number;
}

interface LikedContextType {
  likedProducts: Product[];
  toggleLike: (product: Product) => void;
}

const LikedContext = createContext<LikedContextType | undefined>(undefined);

interface LikedProviderProps {
  children: ReactNode;
}

export const LikedProvider = ({ children }: LikedProviderProps) => {
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);

  const toggleLike = (product: Product) => {
    setLikedProducts((prev) => {
      const isLiked = prev.find((p) => p.id === product.id);
      if (isLiked) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  return (
    <LikedContext.Provider value={{ likedProducts, toggleLike }}>
      {children}
    </LikedContext.Provider>
  );
};

export const useLiked = (): LikedContextType => {
  const context = useContext(LikedContext);
  if (!context) {
    throw new Error("useLiked must be used within a LikedProvider");
  }
  return context;
};
