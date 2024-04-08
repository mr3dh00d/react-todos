import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Pages from './pages'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/todos',
      element: <Pages.Todos />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App