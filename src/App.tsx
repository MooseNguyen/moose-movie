import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import useRouterElement from './useRouterElement'

function App() {
  const routerElement = useRouterElement()
  return (
    <>
      {routerElement}
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default App
