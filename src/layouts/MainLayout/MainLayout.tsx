import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from 'src/components'

interface Props {
  children?: React.ReactNode
}

const MainLayoutInner = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </div>
  )
}

export const MainLayout = memo(MainLayoutInner)
