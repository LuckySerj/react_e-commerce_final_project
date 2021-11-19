import React from 'react';
import { ThemeProvider } from '@mui/material';
import { useRoutes } from '../../routes';
import './App.scss';
import Header from '../Header';
import Footer from '../Footer/Footer';
import theme from '../../services/theme/theme';
import { StyledContainer } from './Styles';

const App = () => {
  const routes = useRoutes();

  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledContainer>
            <Header />
            {routes}
            <Footer />
        </StyledContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
