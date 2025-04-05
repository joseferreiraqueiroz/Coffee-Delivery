import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/default'
import { GlobalStyle } from './styles/globalStyle'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CoffeeContextProvider } from './components/context/context'
import "./index.css"
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
 
      <ThemeProvider theme={defaultTheme}>
        <Toaster 
        richColors
        
        />
          <StrictMode>
            <BrowserRouter>
              <CoffeeContextProvider>
                <Router/>
              </CoffeeContextProvider>
            </BrowserRouter>
          </StrictMode>
        <GlobalStyle/>
      </ThemeProvider>    
  
)
