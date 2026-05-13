import {
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { CartLine, Product } from '../types'
import { createCartLine, normalizeCartQuantity } from '../utils/cartUtils'
import { getDefaultVariant, getVariantById } from '../utils/productUtils'
import { CartContext } from './cartStore'

const STORAGE_KEY = 'millionaires_academy_cart'

const isCartLine = (value: unknown): value is CartLine => {
  if (!value || typeof value !== 'object') {
    return false
  }

  const line = value as Partial<CartLine>

  return (
    typeof line.id === 'string' &&
    typeof line.productId === 'string' &&
    typeof line.variantId === 'string' &&
    typeof line.productTitle === 'string' &&
    typeof line.price === 'number' &&
    typeof line.quantity === 'number'
  )
}

const getStoredItems = () => {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    const parsed = stored ? JSON.parse(stored) : []

    return Array.isArray(parsed) ? parsed.filter(isCartLine) : []
  } catch {
    return []
  }
}

const storeItems = (items: CartLine[]) => {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartLine[]>(getStoredItems)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const persistItems = useCallback((updater: (items: CartLine[]) => CartLine[]) => {
    setItems((currentItems) => {
      const nextItems = updater(currentItems)
      storeItems(nextItems)

      return nextItems
    })
  }, [])

  const addItem = useCallback(
    (product: Product, variantId?: string, quantity = 1) => {
      const variant = variantId ? getVariantById(product, variantId) : getDefaultVariant(product)

      if (!variant?.available) {
        return
      }

      const nextLine = createCartLine(product, variant, quantity)

      persistItems((currentItems) => {
        const existingLine = currentItems.find((item) => item.id === nextLine.id)

        if (!existingLine) {
          return [...currentItems, nextLine]
        }

        return currentItems.map((item) =>
          item.id === nextLine.id
            ? {
                ...item,
                quantity: normalizeCartQuantity(
                  item.quantity + nextLine.quantity,
                  variant.inventory_quantity,
                ),
              }
            : item,
        )
      })

      setIsCartOpen(true)
    },
    [persistItems],
  )

  const removeItem = useCallback(
    (lineId: string) => {
      persistItems((currentItems) => currentItems.filter((item) => item.id !== lineId))
    },
    [persistItems],
  )

  const updateQuantity = useCallback(
    (lineId: string, quantity: number) => {
      persistItems((currentItems) => {
        if (quantity < 1) {
          return currentItems.filter((item) => item.id !== lineId)
        }

        return currentItems.map((item) =>
          item.id === lineId
            ? { ...item, quantity: normalizeCartQuantity(quantity) }
            : item,
        )
      })
    },
    [persistItems],
  )

  const clearCart = useCallback(() => {
    persistItems(() => [])
  }, [persistItems])

  const totalItems = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      totalItems,
      subtotal,
      isCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }),
    [
      addItem,
      clearCart,
      isCartOpen,
      items,
      removeItem,
      subtotal,
      totalItems,
      updateQuantity,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
