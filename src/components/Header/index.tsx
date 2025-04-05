import Logo from '../../assets/Logo.png'
import { MapPin, ShoppingCart  } from 'phosphor-react';
import {DataLocationAndShop, HeaderComponent, HeaderParent } from "./style"
import { Link } from 'react-router-dom';
import { CoffeeContext } from '../context/context';
import { useContext } from 'react';

const Header = () => {
  
  const { cartItems } = useContext(CoffeeContext)
  const cartItemsCoffee = cartItems.length 
  

  return (
      <HeaderComponent>
       <HeaderParent>
       <div>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <DataLocationAndShop>
            <span>
            <MapPin size={24} weight="fill" />
              Porto Alegre, RS
            </span>
            <span> 
              <Link to="/payamentPage">
                {cartItemsCoffee > 0 ? (
                  <>
                    <ShoppingCart size={24}  weight="fill"  />
                    <span>{cartItemsCoffee}</span>
                  </>
                ):(
                       <ShoppingCart size={24}  weight="fill"  />
                )}
              </Link>
            </span>
        </DataLocationAndShop>
       </HeaderParent>
      </HeaderComponent>
  )
}
export default Header