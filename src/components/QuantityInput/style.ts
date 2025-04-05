import styled from "styled-components";

export const BaseInput = styled.div`
  width: 4.5rem;  
  height: 2.375rem; 
  border: 0;
  background-color: ${props => props.theme.colors["base-button"]};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  input {
    width: 2rem; 
    text-align: center;
    border: 0;
    background: transparent;
    flex-grow: 0;  
    flex-shrink: 0;  
    
    &:focus {
      outline: none;
    }
  }

  button {
    border: 0;
    background: transparent;
    color: ${props => props.theme.colors["brand-purple"]};
    cursor: pointer;

    &:disabled {
      color: ${props => props.theme.colors["base-label"]};
    }
  }
`;
