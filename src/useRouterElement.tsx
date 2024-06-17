import path from 'src/constants/path'
import { useRoutes } from 'react-router-dom'
import { MainLayout } from './layouts'
import { Suspense } from 'react'
import { Home, Login, MoviePage } from './pages'

export default function useRouterElement() {
  const routerElement = useRoutes([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: path.home,
          element: (
            <Suspense>
              <Home />
            </Suspense>
          )
        },
        {
          path: path.login,
          element: (
            <Suspense>
              <Login />
            </Suspense>
          )
        },
        {
          path: path.moviCategory,
          element: (
            <Suspense>
              <MoviePage />
            </Suspense>
          )
        }
      ]
    }
  ])
  return routerElement
}
