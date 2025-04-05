import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../../pages/Home/components/OurCoffes/components/cards";
import { produce } from "immer";
import { toast } from "sonner";
import { useTheme } from "styled-components";

interface ChildrenProps {
  children: ReactNode;
}

export interface CartItems extends Coffee {
  quantity: number;
}

interface CartProps {
  cartItems: CartItems[];
  handleAddToCart: (coffee: CartItems) => void;
  handleChangeQuantityItemId: (
    CartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  handleRemoveCoffeInCart: ( CartItemId: number,) => void
  HandleRemoveItemsInCart: () => void
  HandleRemoveItensInCartNoToast: () => void
}

export const CoffeeContext = createContext({} as CartProps);

export function CoffeeContextProvider({ children }: ChildrenProps) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);
  const theme = useTheme()

  function handleAddToCart(coffee: CartItems) {
    const AlreadyExistsInCart = cartItems.findIndex((item) => {
      return item.id === coffee.id;
    });
    const newCart = produce(cartItems, (draft) => {
      if (AlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[AlreadyExistsInCart].quantity += coffee.quantity;
      }
    });
    setCartItems(newCart);
  }

  function handleChangeQuantityItemId(
    CartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const existsInCart = draft.findIndex((item) => item.id === CartItemId);
      if (existsInCart >= 0) {
        const item = draft[existsInCart];
        if (type === "increase") {
          item.quantity += 1;
        } else if (type === "decrease" && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
    });
 
    setCartItems(newCart);
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  function handleRemoveCoffeInCart(
    CartItemId: number,
  ) {
    const newCart = produce(cartItems, (draft) => {
      const existsInCart = draft.findIndex((item) => item.id === CartItemId);
      if (existsInCart >= 0) {
        draft.splice(existsInCart, 1)
      }
      else{
        return draft
      }
    });
    setCartItems(newCart);
  }

  function HandleRemoveItemsInCart(){
     const CartRemove = produce(cartItems, ((draft) =>{
      if(cartItems.length > 0){
        draft.length = 0
        toast.success('Carrinho limpo com sucesso')
      }
      else{
        toast.error('Carrinho já vazio', {   
            style: {
              backgroundColor:  theme.colors["brand-yellow"],
              color: '#fff',               
            },
        })
      }
     }))
     setCartItems(CartRemove)
  }

  function HandleRemoveItensInCartNoToast(){
    const cartRemove = produce(cartItems, ((draft) =>{
        draft.length = 0
    }))
    toast.success("Pedido confirmado com sucesso!")
    setCartItems(cartRemove)
  }
  return (
    <CoffeeContext.Provider
      value={{ handleAddToCart, cartItems, handleChangeQuantityItemId, handleRemoveCoffeInCart, HandleRemoveItemsInCart, HandleRemoveItensInCartNoToast }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
