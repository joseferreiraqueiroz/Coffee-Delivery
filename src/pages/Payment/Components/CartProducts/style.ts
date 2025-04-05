import styled from "styled-components";
import { mixins } from "../../../../styles/fonts/mixins";

export const CartProducts = styled.div`

  h2 {
    font-size: ${mixins.fonts.titleXS};
    color: ${props => props.theme.colors["base-subtitle"]};
  }
  @media (max-width: 768px) {
    width: 100%;
    h2 {
      font-size: ${mixins.fonts.titleS};
    }
  }
  @media (min-width: 768px) {
    width: 100%;
  }
`;
export const ContentProducts = styled.div`
  background-color: ${props => props.theme.colors["base-card"]};
  border-radius: 6px 44px 6px 44px;
  margin-top: 15px;
  padding: 1rem 2.5rem 2.5rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
export const CoffeeInformation = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  img {
    width: 4rem;
    height: 4rem;
  }
  border-bottom: 2px solid ${props => props.theme.colors["base-button"]};
  padding: 1.25rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  }
`;
export const InputPriceAndButton = styled.div`
display: flex;
flex-direction: column;
`
export const CoffeeInput = styled.div`
  display: flex;
  gap: 1.25rem;
  div {
    display: flex;
    gap: 0.5rem;
  }
  .removeCoffeeProduct {
    background-color: ${props => props.theme.colors["base-button"]};
    height: 2.375rem;
    border-radius: 8px;
    padding: 0 1rem;
    font-size: ${mixins.fonts.buttonM};
    color: ${props => props.theme.colors["base-text"]};
    display: flex;
    align-items: center;
    gap: 0.25rem;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.2s;
    svg {
      color: ${props => props.theme.colors["brand-purple"]};
    }
    &:hover {
      background-color: ${props => props.theme.colors["base-hover"]};
    }
  }
  span {
    font-size: ${mixins.fonts.textM};
    color: ${props => props.theme.colors["base-subtitle"]};
  }
  @media (max-width: 768px) {
    .removeCoffeeProduct {
      width: 100%;
      font-size: ${mixins.fonts.buttonG};
    }
  }
`;
export const CoffeePrice = styled.div`
  margin-left: 3.125rem;
  p {
    width: 100%;
    font-size: ${mixins.fonts.textM};
    font-weight: bold;
    color: ${props => props.theme.colors["base-text"]};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (max-width: 768px) {
    margin-left: 0;
    p {
      font-size: ${mixins.fonts.textS};
    }
  }
`;
export const TotalPrice = styled.div`
  margin-top: 1.25rem;
  div {
    display: flex;
    justify-content: space-between;
    margin-top: 0.75rem;
    span:first-child {
      font-size: ${mixins.fonts.textS};
      color: ${props => props.theme.colors["base-text"]};
    }
    span:last-child {
      font-size: ${mixins.fonts.textM};
      color: ${props => props.theme.colors["base-text"]};
    }
  }
  @media (max-width: 768px) {
    div {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
export const Total = styled.div`
  font-size: ${mixins.fonts.textL};
  color: ${props => props.theme.colors["base-subtitle"]};
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: ${mixins.fonts.textM};
  }
`;
export const FormatPrice = styled.div`
  display: flex;
  align-items: flex-end;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const BaseButtonCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  border: 0;
  border-radius: 6px;
  padding: 0.75rem;
  text-transform: uppercase;
  font-size: ${mixins.fonts.buttonG};
  cursor: pointer;
  transition: 0.2s;
  @media (max-width: 768px) {
    padding: 1rem;
    font-size: ${mixins.fonts.buttonG};
  }
`;
export const ButtonConfirmForm = styled(BaseButtonCart)`
  color: ${props => props.theme.colors["base-white"]};
  margin-top: 1.25rem;
  background-color: ${props => props.theme.colors["brand-purple"]};
  &:hover {
    background-color: ${props => props.theme.colors["brand-purple-dark"]};
    transition: 0.2s;
  }
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
export const ButtonRemoveItemsInCart = styled(BaseButtonCart)`
  color: ${props => props.theme.colors["base-white"]};
  margin-top: 0.5rem;
  background-color: #FF1A33;
  &:hover {
    background-color: #E60026;
    transition: 0.2s;
  }
  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;