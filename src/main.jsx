import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyLibrary from './pages/MyLibrary.jsx'
import Reviews from './pages/Reviews.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <PageNotFound/>,
  },
  {path: "biblioteca", element: <MyLibrary/>},
  {path: "avaliacoes", element: <Reviews />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
