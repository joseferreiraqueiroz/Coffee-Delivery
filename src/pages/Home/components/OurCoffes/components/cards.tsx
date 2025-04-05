import {
  CoffeeCardContainer,
  Tags,
  CardFooter,
  AddCartWrapper,
  NameCoffee,
  DescriptionCoffee,
  PriceCoffee,
} from "./style";
import { ShoppingCart } from "phosphor-react";
import { ConvertMoney } from "../../../../../ultis/ConvertMoney";
import QuantityInput from "../../../../../components/QuantityInput";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../../../../components/context/context";
import { toast } from 'sonner'
 
export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

export interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  
  const { handleAddToCart } = useContext(CoffeeContext)

  const [quantity, setQuantity] = useState(1)

  function inIncrease(){
      setQuantity(state => state + 1)
  }

  function inDecrease(){
    setQuantity(state => state - 1)
  }

  const formattedPrice = ConvertMoney(coffee.price);
  function handleClickAddToCart(){
    const itemCart = {
      ...coffee,
      quantity
    }
      handleAddToCart(itemCart)
     toast.success('Item adicionado ao carrinho!')
  }
  
  return (
    <CoffeeCardContainer>
      <img src={`/coffes/${coffee.photo}`} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <NameCoffee>{coffee.name}</NameCoffee>
      <DescriptionCoffee>{coffee.description}</DescriptionCoffee>

      <CardFooter>
        <PriceCoffee>
          <span>R$</span>
          <span>
            {formattedPrice}
          </span>
        </PriceCoffee>

        <AddCartWrapper>
          <QuantityInput 
          inIncrease={inIncrease}
          inDecrease={inDecrease}
          quantity={quantity}
          />
           <button onClick={handleClickAddToCart}>
            <ShoppingCart weight="fill"
            
            />
           </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}