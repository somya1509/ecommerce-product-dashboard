import { createContext } from 'react';
import {ContextState } from '../types';

export const ProductContext = createContext<ContextState | null>(null);
