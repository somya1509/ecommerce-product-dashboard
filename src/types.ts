export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating?: {
      rate: number;
      count: number;
    };
  }
  
  export interface FilterOptions {
    category?: string;
    priceRange?: [number, number];
    sort?: string;
  }
  
  export interface ContextState {
    products: Product[];
    isLoading: boolean;
    filters: FilterOptions;
    setFilters: (filters: FilterOptions) => void;
    fetchMoreProducts: () => void;
  }
  