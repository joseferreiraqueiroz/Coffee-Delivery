import styled from "styled-components";
import { mixins } from "../../../../styles/fonts/mixins";
export const AddressForm = styled.div`
  div {
    background-color: ${props => props.theme.colors["base-card"]};
    border-radius: 6px;
  }

  h2 {
    font-size: ${mixins.fonts.titleXS};
    color: ${props => props.theme.colors["base-subtitle"]};
  }
`;

export const AddressFormContent = styled.div`
  padding: 2.5rem;
  margin-top: 15px;

  div {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    row-gap: 1rem;

    .cep {
      grid-column: span 3;
      max-width: 14.5rem;
    }

    .rua {
      grid-column: span 3;
    }

    .complemento {
      grid-column: span 2;
    }

    @media (min-width: 1080px) and (max-width: 1400px) {
      width: 100%;
      div {
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
        row-gap: 1rem;
      }
    }
    input {
      height: 2.625rem;
      border-radius: 4px;
      border: 1px solid ${props => props.theme.colors["base-button"]};
      background: ${props => props.theme.colors["base-input"]};
      color: ${props => props.theme.colors["base-text"]};
      font-size: 0.75rem;
      padding: 0 0.75rem;

      &:focus {
        outline: 2px solid ${props => props.theme.colors["brand-yellow-dark"]};
      }

      &::placeholder {
        color: ${props => props.theme.colors["base-label"]};
        font-size: ${mixins.fonts.textS};
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    div {
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
      row-gap: 1rem;
    }

    .cep {
      grid-column: span 2;
    }

    .rua {
      grid-column: span 2;
    }

    .complemento {
      grid-column: span 2;
    }

    input {
      width: 100%;
    }
  }

  @media (max-width: 1080px) {
    div {
      width: 100%;
      max-width: 100%;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .cep {
      grid-column: span 1;
    }

    .rua {
      grid-column: span 2;
    }

    .complemento {
      grid-column: span 1;
    }

    input {
      width: 100%;
      max-width: 100%; 
    }
  }
`;
