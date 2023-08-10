'use client'

import Cart from '@/components/Cart'
import CartEmpity from '@/components/CartEmpity'
import { useState, useEffect } from 'react'

export default function CartPage() {
  const [cartItems, setCartItems] = useState()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let storagedProducts = JSON.parse(localStorage.getItem('products'))
      setCartItems(storagedProducts)
    } else {
      setCartItems(null)
    }
  }, [])

  return (
    <main>
      {cartItems == null ? <CartEmpity /> : <Cart cartItems={cartItems} />}
    </main>
  )
}
