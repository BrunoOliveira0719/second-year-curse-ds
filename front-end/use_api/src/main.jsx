import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '../routes/App.jsx'
import SignUp from '../routes/SignUp.jsx'
import UpdateUser from '../routes/UpdateUser.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />
},
{
  path: "/signUp",
  element: <SignUp />
},
{
  path: "/updateUser",
  element: <UpdateUser />
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
