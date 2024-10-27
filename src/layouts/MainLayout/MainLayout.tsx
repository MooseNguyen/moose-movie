import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from 'src/components'

interface IMainLayoutInnerProps {
  children?: React.ReactNode
}

const MainLayoutInner = ({ children }: IMainLayoutInnerProps) => {
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
