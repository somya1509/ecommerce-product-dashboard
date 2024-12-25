import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { ContextState, FilterOptions, Product } from "../types";
import { ProductContext } from "./product.context";

interface ProductProviderProps {
    children: ReactNode;
  }
  
  export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filters, setFilters] = useState<FilterOptions>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
  
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    const fetchMoreProducts = () => {
      // Infinite scroll logic here
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    const value: ContextState = {
      products,
      isLoading,
      filters,
      setFilters,
      fetchMoreProducts,
    };
  
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
  };