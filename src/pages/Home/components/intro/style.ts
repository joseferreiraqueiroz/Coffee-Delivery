import styled from "styled-components";
import introBackground from '../../../../assets/intro-background.svg';
import { rgba } from "polished";
import { mixins } from "../../../../styles/fonts/mixins";


export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column; 
  padding: 0 8.33vw;

  background: ${({ theme }) => `url(${introBackground}) no-repeat center,
    linear-gradient(
      0deg,
      ${theme.colors["base-white"]} 0%,
      ${rgba(theme.colors["base-background"], 0.2)} 50%,
      ${theme.colors["base-background"]} 100%
    )`};
  background-size: cover;


  @media (max-width: 1080px) {
    padding: 0 5vw;  
  }
`;

export const IntroContentSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  padding: 5.875rem;
  line-height: 130%;
  flex-direction: row;  

  h1 {
    font-size: ${mixins.fonts.titleXL};
    margin-bottom: 2rem;
  }

  p {
    font-size: ${mixins.fonts.textL};
  }


  @media (max-width: 1080px) {
    flex-direction: column;  
    align-items: center; 
    padding: 3rem;  
    gap: 2rem; 
  }
`;

export const DivulgationCoffe = styled.div`
  margin-top: 4.46rem;
  font-size: ${mixins.fonts.textM};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;


  @media (max-width: 1080px) {
    grid-template-columns: 1fr; 
    gap: 1.5rem;  
    margin-top: 2rem; 
  }

  span {
    
    display: flex;
    align-items: center;
    gap: 0.75rem;
    svg {
            height: 32px;
            width: 32px;
            padding: 0.40rem;
            border-radius: 50%;
    }
  }
`;
