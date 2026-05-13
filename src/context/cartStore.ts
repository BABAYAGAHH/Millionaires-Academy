import { createContext, useContext } from 'react'
import type { CartLine, Product } from '../types'

export interface CartContextValue {
  items: CartLine[]
  totalItems: number
  subtotal: number
  isCartOpen: boolean
  addItem: (product: Product, variantId?: string, quantity?: number) => void
  removeItem: (lineId: string) => void
  updateQuantity: (lineId: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
}

export const CartContext = createContext<CartContextValue | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
