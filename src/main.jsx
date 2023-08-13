import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import Blog from './components/Blog.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CamPage from './components/CamPage.jsx'
const router = createBrowserRouter([
  {
      path: '/',
      element: (
        <App/>
      ),
  },
  {
    path: '/blog',
    element:<Blog />
  },
  {
    path: '/chat',
    element:(<div className='w-screen h-screen bg-primary'>
      <frameset>
    <frame src='https://wastex-chat.streamlit.app/?embed=True'/>
  </frameset>
    </div>)
  },
  {
    path: '/camera',
    element:<CamPage/>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>,
)
