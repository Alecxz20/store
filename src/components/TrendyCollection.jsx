import style from './TrendyCollection.module.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ProductCard from './ProductCard'
import products from '../products'

export default function TrendyCollection() {
  const trendyProducts = products.filter(item => item.trendy)
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1140 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1140, min: 850 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 850, min: 580 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 580, min: 0 },
      items: 1,
    },
  }
  return (
    <section className={style.trendyCollection}>
      <h2 className={style.title}>Trendy Collection</h2>
      <Carousel responsive={responsive}>
        {trendyProducts.map((product, index) => (
          <ProductCard key={index} trendy={product} />
        ))}
      </Carousel>
    </section>
  )
}
