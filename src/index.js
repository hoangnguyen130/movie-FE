import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './component/GlobalStyles';

import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
  <GoogleOAuthProvider clientId="960751800536-or3kebluacor6lhms6tamdiih59ri6m0.apps.googleusercontent.com">
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </GoogleOAuthProvider>
);

reportWebVitals();
