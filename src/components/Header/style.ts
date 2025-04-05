import styled from "styled-components";
import { mixins } from "../../styles/fonts/mixins";

export const HeaderComponent = styled.div`
  display: flex;
  padding: 0 13.33vw;  /* Default padding for larger screens */
  width: 100%;
  height: 6.5rem;
  background-color: ${props => props.theme.colors["base-background"]};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  @media (max-width: 1080px) {
    padding: 0 5vw;  
  }

  @media (max-width: 768px) {
    padding: 0 2vw;  
  }

  @media (max-width: 480px) {
    padding: 0;  
  }
`;
export const HeaderParent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    img{
        width: 85px;
        height: 40px;
    }
`
export const DataLocationAndShop = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    span{
        font-size: ${mixins.fonts.textS};
        position: relative;
    }
    span:first-child{
        background-color: ${props => props.theme.colors['brand-purple-light']};
        color: ${props => props.theme.colors['brand-purple']};;
        font-weight: ${mixins.fonts.textS};
        border-radius: 8px;
        padding: 0.5rem;
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: center;
    }
    span:last-child{
        a{
            background-color: ${props => props.theme.colors['brand-yellow-light']};
        color: ${props => props.theme.colors['brand-yellow-dark']};
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        transition: 0.4s ;
        cursor: pointer;
        &:hover{
            background-color: ${props => props.theme.colors['brand-yellow']};
            color: ${props => props.theme.colors['brand-yellow-light']};
            transition: 0.4s        
        }
        }
        span{
            position: absolute;
    height: 1.25rem;
    width: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors["base-white"]};
    border-radius: 50%;
    background-color: ${props => props.theme.colors["brand-yellow-dark"]};
    top: calc(-1.25rem/2); 
    right: calc(-1.25rem/2);
    
        }
    }
`

  
