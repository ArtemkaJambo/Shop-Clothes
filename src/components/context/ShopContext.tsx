import { createContext, ReactNode, useState} from "react"
import { productOutwear, productsHoody, productsTShirts, productsTrousers } from "../../products";

interface ShopContextProps {
    addToCart: (itemId: number) => void;
    removeFromCart: (itemId: number) => void;
    upDateItems: (newAmount: number, itemId: number) => void;
    cartItems: Cart;
}

export const ShopContext = createContext<ShopContextProps | null>(null)

interface ShopContextProviderProps {
  children: ReactNode;
}

interface Cart {
    [key: number]: number
}

function getDefaultItem(allProducts: any) {
    let cart: Cart = {}
  for (let i = 1; i < allProducts.length + 1; i++) {
    cart[i] = 0
  }
  return cart
}

const allProducts = [...productsHoody, ...productsTShirts, ...productsTrousers, ...productOutwear]

const ShopContextProvider = (props: ShopContextProviderProps) => {
    const [cartItems, setCartItems] = useState<Cart>(getDefaultItem(allProducts));
    
    function addToCart(itemId: number) {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }
    function removeFromCart(itemId: number) {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }
    function upDateItems(newAmount: number, itemId: number) {
      setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }
    
    console.log(cartItems);
  const contextValue = {cartItems, addToCart, removeFromCart, upDateItems}

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
