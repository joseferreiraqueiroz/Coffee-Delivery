import styled from "styled-components";
import { mixins } from "../../../../../styles/fonts/mixins";

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  margin-top: 3.375rem;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`;

export const NameCoffee = styled.span`
    font-size: ${mixins.fonts.titleS};
    color: ${ props => props.theme.colors["base-subtitle"]};
    margin-bottom: 0.5rem;
    margin-top: 1rem;
`

export const DescriptionCoffee = styled.span`
    font-size: ${mixins.fonts.textS};
    color: ${ props => props.theme.colors["base-label"] };
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex-wrap: wrap;
  margin-top: 0.75rem;
  span {
    background: ${({ theme }) => theme.colors["brand-yellow-light"]};
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    font-size: ${mixins.fonts.tag};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`;




export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    p {
      line-height: 0.75rem;
    }
  }
`;

export const AddCartWrapper = styled.div`
 
  >button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors["brand-purple-dark"]};
    color: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.2s;
    padding: 0.5rem;

    &:hover {
      background: ${({ theme }) => theme.colors["brand-purple"]};
    }
  }
`;

export const PriceCoffee = styled.div`
    span{
        display: flex;
        align-items: center;
    }
    :first-child{
        color: ${props => props.theme.colors["base-text"]};
        font-size: ${mixins.fonts.textS};
    }
    :last-child{
        color: ${props => props.theme.colors["base-text"]};
        font-size: ${mixins.fonts.titleM};
    }
`