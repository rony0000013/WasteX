import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorPage from './components/ErrorPage.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import Blog from './components/Blog.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CamPage from './components/CamPage.jsx'


// const router = createBrowserRouter([
//   {
//       path: '/',
//       errorElement: <ErrorPage />,
//       element: (
//         <App/>
//       ),
//   },
//   {
//     path: '/blog',
//     errorElement: <ErrorPage />,
//     element:<Blog />
//   },
//   {
//     path: '/chat',
//     errorElement: <ErrorPage />,
//     element:(<div className='w-screen h-screen bg-primary'>
//       <div className='align-middle flex flex-wrap justify-center gap-4 bg-primary'>
//             <a className="Btn" href="/"><button className='btn btn-success '>
//                 Go back to home
//         </button></a>
//         </div>
//       <frameset>
//     <frame src='https://wastex-chat.streamlit.app/?embed=True'/>
//   </frameset>
//     </div>)
//   },
//   {
//     path: '/camera',
//     errorElement: <ErrorPage />,
//     element:<CamPage/>
//   },
// ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} errorElement={<ErrorPage />} />
        <Route path="/chat" element={(<div className='w-screen h-screen bg-primary'>
      <div className='align-middle flex flex-wrap justify-center gap-4 bg-primary'>
            <a className="Btn" href="/"><button className='btn btn-success '>
                Go back to home
        </button></a>
        </div>
      <frameset>
    <frame src='https://wastex-chat.streamlit.app/?embed=True'/>
  </frameset>
    </div>)} errorElement={<ErrorPage />} />
        <Route path="/blog"  element={<Blog />} errorElement={<ErrorPage />} />
        <Route path="/camera"  element={<CamPage />} errorElement={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
)
