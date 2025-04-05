import styled from "styled-components";
import { mixins } from "../../../../styles/fonts/mixins";

export const OurCoffesComponentParent = styled.div`
  background-color: ${props => props.theme.colors["base-background"]};
  min-height: 100vh;

  h1 {
    padding: 2rem 13.33vw;
    font-size: ${mixins.fonts.titleL};
    color: ${props => props.theme.colors["base-subtitle"]};
  }

  @media (max-width: 768px) {
    h1 {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 5vw; 
    }
  }
`;

export const OurCoffesContent = styled.main`
  display: grid;
  width: 100%; 
  max-width: 72rem; 
  grid-template-columns: repeat(5, 1fr); 
  padding: 0 13.33vw; 
  gap: 2rem;
  background-color: ${props => props.theme.colors["base-background"]};

 
  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr); 
    padding: 0 10vw; 
    gap: 1.5rem;
    justify-items: center; 
  }

 
  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
    padding: 0 5vw; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; 
    gap: 1.2rem; 
  }


  @media (max-width: 480px) {
    padding: 0 3vw; 
    gap: 1rem; 
  }
`;
