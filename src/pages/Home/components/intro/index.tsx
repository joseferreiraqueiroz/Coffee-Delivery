import { DivulgationCoffe, IntroContainer, IntroContentSection } from "./style";
import CoffeImage from "../../../../assets/CoffeImage.svg";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";

const IntroContent = () => {
  
  const theme = useTheme()

  return (
    <IntroContainer>
      <IntroContentSection>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <DivulgationCoffe>
            <span> 
            <ShoppingCart
            size={32}
            weight="fill"
            color={theme.colors["base-background"]}
            style={{backgroundColor: theme.colors["brand-yellow-dark"] }}
            />
             Compra simples e segura
             </span>
            <span>
               <Package
               size={32}
               weight="fill"
               color={theme.colors["base-background"]}
               style={{backgroundColor: theme.colors["base-text"] }}
               /> Embalagem mantém o café intacto
               </span>
            <span>
               <Timer
               size={32}
               weight="fill"
               color={theme.colors["base-background"]}
               style={{backgroundColor: theme.colors["brand-yellow"] }}
               /> Entrega rápida e rastreada
               </span>
            <span> 
              <Coffee
              size={32}
              weight="fill"
              color={theme.colors["base-background"]}
              style={{backgroundColor: theme.colors["brand-purple"] }}
              /> O café chega fresquinho até você
              </span>
          </DivulgationCoffe>
        </div>

        <img src={CoffeImage} alt="" />
      </IntroContentSection>
    </IntroContainer>
  );
};

export default IntroContent;
