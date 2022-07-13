import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);

/*
  1.
    Sukurti navigavimą į Žiedimas - '/pottery' puslapį
      * sukurti poterry-page.jsx | minimalų React komponentą, be turinio (kolkas)
      * sukurti <Route ... /> app.jsx faile
      
  2. 
    Sukurkite Krepšelis puslapį, su maršrutu '/cart'
      * sukurti cart-page.jsx | minimalų React komponentą, be turinio (kolkas)
      * sukurti <Route ... /> app.jsx faile
      * Naviguoja į šį puslapį, paspaudus ikoną dešiniame navbar kampe

    Dešnėje puslapio dalyje yra ikona, ją reikia apgaubti IconButton komponenetui (MUI) ir ant mygtuko
    paspaudimo įgalinti navigavimą.
      Tai yra daroma naudojant 'useNavigate()' hook'są, apie kurį reikia pasiskaityti.

    Naudingos nuorodos:
      * https://mui.com/material-ui/react-button/#icon-button
      * https://reactrouter.com/docs/en/v6/hooks/use-navigate
*/