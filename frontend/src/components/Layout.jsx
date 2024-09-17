import Navber from './Navber'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <>
        <Navber/>
            {children}
        <Footer/>
    </>
  )
}
