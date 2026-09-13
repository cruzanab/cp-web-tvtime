import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import App from './App.jsx'
import MyLibrary from './pages/MyLibrary.jsx'
import Reviews from './pages/Reviews.jsx'

const router = createBrowserRouter([
  {
    path: "/", element: <App/>, },
  {path: "/biblioteca", element: <MyLibrary/>},
  {path: "/avaliacoes", element: <Reviews />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
