import styled from "styled-components";
import { mixins } from "../../styles/fonts/mixins";

export const PayamentComponentParent = styled.div`
  padding: 0 13.33vw; 
  margin-top: 2.5rem;

  form {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
  }

  @media (max-width: 1080px) {
    padding: 0 5vw;
    form {
      flex-direction: column;
      gap: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 0 4vw;
    margin-top: 1.5rem;

    form {
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`;
export const DeliveryForm = styled.div`
  display: flex;
  width: 100%; 
  flex-direction: column;
  gap: 0.75rem;
 
  @media (min-width: 1080px) and (max-width: 1200px){
    width: 70%;
    div {
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
      row-gap: 1rem;
    }
    input {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    width: 100%; 
  }
`;


export const PayamentFormat = styled.div`
  background-color: ${props => props.theme.colors["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: ${mixins.fonts.textM};
    color: ${props => props.theme.colors["base-subtitle"]};
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${props => props.theme.colors["brand-purple"]};
    }
  }

  span {
    margin-top: 0.125rem;
    font-size: ${mixins.fonts.textS};
    color: ${props => props.theme.colors["base-text"]};
    padding-left: 2rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    gap: 0.75rem;
   
    button {
      border: 0;
      border-radius: 6px;
      background-color: ${props => props.theme.colors["base-button"]};
      display: flex;
      align-items: center;
      padding: 1rem;
      width: 12rem;
      font-size: ${mixins.fonts.textS};
      color: ${props => props.theme.colors["base-text"]};
      text-transform: uppercase;
      gap: 0.75rem;
      cursor: pointer;
      transition: 0.2s;

      svg {
        width: 14px;
        color: ${props => props.theme.colors["brand-purple"]};
      }

      &:focus {
        background-color: ${props => props.theme.colors["brand-purple-light"]};
        outline: 1px solid ${props => props.theme.colors["brand-purple"]};
      }

      &:not(:focus):hover {
        background-color: ${props => props.theme.colors["base-hover"]};
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 100%;

    h3 {
      font-size: ${mixins.fonts.textS};
    }

    div {
      flex-direction: column;
      padding-left: 0;
      gap: 1rem;

      button {
        width: 100%;
        font-size: ${mixins.fonts.textS};
      }
    }
  }
`;