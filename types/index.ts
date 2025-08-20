import { createContext, useContext } from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  address: string;
}

export interface AppContextType {
  products: Product[];
  cart: CartItem[];
  user: User | null;
  addToCart: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  setUser: (user: User) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export default AppContext;