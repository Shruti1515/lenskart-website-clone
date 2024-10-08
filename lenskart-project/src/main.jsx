  
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <Auth0Provider
    domain="dev-3ooqq8ur6ig6b05h.us.auth0.com"
    clientId="xlqsD2e5uB9LVZpxy8Z73E6BxAEOyyoQ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
    
  
  </BrowserRouter>
)
