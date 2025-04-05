import { useContext } from "react";
import QuantityInput from "../../../../components/QuantityInput";
import { ConvertMoney } from "../../../../ultis/ConvertMoney";
import { ButtonConfirmForm, 
  ButtonRemoveItemsInCart, 
  CartProducts, CoffeeInformation,
   CoffeeInput, CoffeePrice, ContentProducts, 
   FormatPrice,
   InputPriceAndButton,
   Total, 
   TotalPrice } from "./style";
import { CoffeeContext } from "../../../../components/context/context";
import { Check, Trash } from "phosphor-react";

export const CartProductsComponent = () => {
   const {
    cartItems,
    handleChangeQuantityItemId,
    handleRemoveCoffeInCart,
    HandleRemoveItemsInCart, } = useContext(CoffeeContext)
    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      const formattedPrice = ConvertMoney(totalPrice);
      const totalPriceAndDelivery = totalPrice + 5;
      const formattedPriceAndDelivery = ConvertMoney(totalPriceAndDelivery);

      function handleIncrease(id: number) {
        handleChangeQuantityItemId(id, "increase");
      }
    
      function handleDecrease(id: number) {
        handleChangeQuantityItemId(id, "decrease");
      }
  
    return (
    <CartProducts>
    <h2>Complete seu pedido</h2>
    <ContentProducts>
      {cartItems.map((item) => {
        const itemTotalPrice = item.price * item.quantity;
        const formattedPriceItem = ConvertMoney(itemTotalPrice);

        return (
          <CoffeeInformation key={item.id}>
            <CoffeeInput>
               <img src={`/coffes/${item.photo}`} alt="" />
               <InputPriceAndButton>
                <span>{item.name}</span>
                <div>
                <QuantityInput
                  quantity={item.quantity}
                  inIncrease={() => handleIncrease(item.id)}
                  inDecrease={() => handleDecrease(item.id)}
                />
                <button
                  className="removeCoffeeProduct"
                  onClick={() => {
                    handleRemoveCoffeInCart(item.id);
                  }}
                >
                  <Trash size={14} />
                  Remover
                </button>
                </div>
               </InputPriceAndButton>
            </CoffeeInput>
            <CoffeePrice>
              <p>{formattedPriceItem}</p>
            </CoffeePrice>
          </CoffeeInformation>
        );
      })}

      <TotalPrice>
        <div>
          <span>Total de Itens</span>
          <span>{formattedPrice}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ 5,00</span>
        </div>
        <FormatPrice>
          {formattedPrice === "0,00" ? (
            <span>Nenhum item adicionado</span>
          ) : (
            <>
              <Total>Total</Total>
              <Total>{formattedPriceAndDelivery}</Total>
            </>
          )}
        </FormatPrice>

        <ButtonConfirmForm type="submit">
          <Check size={24} weight="bold" />
          confirmar pedido
        </ButtonConfirmForm>
        <ButtonRemoveItemsInCart
          type="button"
          onClick={HandleRemoveItemsInCart}
        >
          <Trash size={24} weight="bold" />
          limpar carrinho
        </ButtonRemoveItemsInCart>
      </TotalPrice>
    </ContentProducts>
  </CartProducts>
  )
}
