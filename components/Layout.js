import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      <Navbar />
      <h1>Hello From Layout</h1>
      {props.children}
      <Footer />
    </>      
  )
}
export default Layout;