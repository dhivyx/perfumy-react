import Navbar from "./components/navbar"
import Searchbar from "./components/searchbar"
import Products from "./components/products"
import Aboutus from "./components/aboutus"
import Footer from "./components/footer"

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Searchbar></Searchbar>
            <Products></Products>
            <Aboutus></Aboutus>
            <Footer></Footer>
        </div>
    )
}

export default App