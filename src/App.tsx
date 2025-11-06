import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from "./pages/Root"
import Homepage from "./pages/Homepage"
import SearchPage from "./pages/SearchPage"
import DetailsPage from "./pages/DetailsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: "/search",
        element: <SearchPage/>
      },
      {
        path: "/packages/:name",
        element: <DetailsPage/>
      }
    ]
  }
])

function App() {

  return <RouterProvider router={router}/>
}

export default App
