
import one from "../images/one.jpg"
import two from "../images/two.jpg"
import three from "../images/three.jpg"

//Creating Products 
function Products() {
  return (
    <div className="products">
      <div className="box">
        <img src={one} alt="Youth"></img>
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>
      <div className="box">
        <img src={two} alt="villain"></img>
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>
      <div className="box">
        <img src={three} alt="Designs Club"></img>
        <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
      </div>
    </div>
  )

}

export default Products