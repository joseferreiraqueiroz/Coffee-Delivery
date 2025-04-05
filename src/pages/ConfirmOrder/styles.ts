import styled from "styled-components";
import { mixins } from "../../styles/fonts/mixins";

export const ContentConfirmOrder = styled.div`
  width: 100%;
  padding: 0 13.33vw;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 0 2rem;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
  }
`;

export const InformationOrder = styled.div`
  margin-top: 5rem;
  h1 {
    color: ${props => props.theme.colors["brand-yellow-dark"]};
    font-size: ${mixins.fonts.titleL};
    margin-bottom: 0.25rem;
  }
  .SubTitleOrder {
    font-size: ${mixins.fonts.textL};
    color: ${props => props.theme.colors["base-subtitle"]};
  }
`;

export const ImageMotoBoy = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 0 0 13.33vw; /* Ajuste para ficar mais afastado da div */
  
  @media (max-width: 1024px) {
    padding: 0;
    justify-content: center;
    max-width: 100%;
  }

  @media (min-width: 1025px) {
    padding-left: 5rem; /* Afastar mais a imagem da div em telas grandes */
  }
`;

export const ContentInformationOrder = styled.div`
  margin-top: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  padding: 2.5rem;
  background: ${props => props.theme.colors["base-background"]};
  min-width: 32rem;
  position: relative;
  box-sizing: border-box;
  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047F8 98.76%);
  }

  .DeliveryDetails {
    display: flex;
    margin-bottom: 2rem;
    align-items: center;
    gap: 0.75rem;
    div {
      display: flex;
      flex-direction: column;
      span:first-child {
        color: ${props => props.theme.colors["base-text"]};
        font: ${mixins.fonts.textM};
        gap: 0.25rem;
      }
      span:last-child {
        color: ${props => props.theme.colors["base-text"]};
        font: ${mixins.fonts.titleXS};
      }
    }
    span {
      display: flex;
      align-items: center;
      svg {
        height: 32px;
        width: 32px;
        padding: 0.40rem;
        border-radius: 50%;
      }
    }
  }
`;

export const AdressComplement = styled.div`
  color: ${props => props.theme.colors["base-text"]};
  font: ${mixins.fonts.textM};
`;

export const DivSeparationOrderInformation = styled.div`
  display: flex;
  min-width: 70rem;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    flex-direction: column;
    min-width: 100%;
    gap: 2rem;
  }
`;
