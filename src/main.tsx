import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './routes.tsx';
import { GeneralProvider } from './generalContextApi.tsx';
import { ThemeProvider } from './contexts/ThemeContext'; 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <GeneralProvider>
        <RouterProvider router={router} />
      </GeneralProvider>
    </ThemeProvider>
  </StrictMode>
);
