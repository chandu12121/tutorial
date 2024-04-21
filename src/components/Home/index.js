import {Component} from 'react'
import NavBar from '../NavBar'
import ProductCard from '../ProductCard'
import './index.css'

class Home extends Component {
  state = {
    productsList: [],
    isLoading: false,
  }

  // componentDidMount() {
  //   this.getProducts()
  // }

  // getProducts = async () => {
  //   this.setState({
  //     isLoading: true,
  //   })
  //   const jwtToken = Cookies.get('jwt_token')
  //   const apiUrl = 'https://apis.ccbp.in/products'
  //   const options = {
  //     headers: {
  //       Authorization: `Bearer ${jwtToken}`,
  //     },
  //     method: 'GET',
  //   }
  //   const response = await fetch(apiUrl, options)
  //   if (response.ok) {
  //     const fetchedData = await response.json()
  //     const updatedData = fetchedData.products.map(product => ({
  //       title: product.title,
  //       brand: product.brand,
  //       price: product.price,
  //       id: product.id,
  //       imageUrl: product.image_url,
  //       rating: product.rating,
  //     }))
  //     this.setState({
  //       productsList: updatedData,
  //       isLoading: false,
  //     })
  //   }
  // }
  // <ul className="products-list">
  //         {productsList.map(product => (
  //           <ProductCard productData={product} key={product.id} />
  //         ))}
  //       </ul>

  renderProductsList = () => {
    const {productsList} = this.state
    return (
      <>
      <div>
      <NavBar />
      </div>
        <div>
          <h1 className="products-heading">Editors Picks</h1>

          <img
            src="https://res.cloudinary.com/debrk14uy/image/upload/v1690806260/cld-sample-3.jpg"
            alt="website logo"
          />
        </div>

        <div>
          <h1 className="products-heading">Genres & Moods</h1>

          <img
            src="https://res.cloudinary.com/debrk14uy/image/upload/v1690806260/cld-sample-3.jpg"
            alt="website logo"
          />
        </div>

        <div>
          <h1 className="products-heading">New Releases</h1>

          <img
            src="https://res.cloudinary.com/debrk14uy/image/upload/v1690806260/cld-sample-3.jpg"
            alt="website logo"
          />
        </div>
      </>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <img
        src="https://res.cloudinary.com/debrk14uy/image/upload/v1713351895/music_1x_wtcjng.png"
        alt="img"
      />

      <h1>Loading...</h1>
    </div>
  )

  render() {
    const {isLoading} = this.state
    return <>{isLoading ? this.renderLoader() : this.renderProductsList()}</>
  }
}

export default Home
