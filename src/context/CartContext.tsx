import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Product } from '../types/Product'
import type { CartItem } from '../types/CartItem'

type CartContextType = {
  items: CartItem[]
  addToCart: (product: Product) => void
  increment: (productId: Product['id']) => void
  decrement: (productId: Product['id']) => void
  remove: (productId: Product['id']) => void
  clear: () => void
  totalItems: number
  subtotal: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  function addToCart(product: Product) {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id)

      if (existing) {
        return prev.map(i =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }

      return [...prev, { product, quantity: 1 }]
    })
  }

  function increment(productId: Product['id']) {
    setItems(prev =>
      prev.map(i =>
        i.product.id === productId ? { ...i, quantity: i.quantity + 1 } : i
      )
    )
  }

  function decrement(productId: Product['id']) {
    setItems(prev =>
      prev
        .map(i =>
          i.product.id === productId ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter(i => i.quantity > 0)
    )
  }

  function remove(productId: Product['id']) {
    setItems(prev => prev.filter(i => i.product.id !== productId))
  }

  function clear() {
    setItems([])
  }

  const totalItems = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  )

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    [items]
  )

  return (
    <CartContext.Provider
      value={{ items, addToCart, increment, decrement, remove, clear, totalItems, subtotal }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
