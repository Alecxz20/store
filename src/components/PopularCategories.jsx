import style from './PopularCategories.module.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import PopularCategoriesItem from './PopularCategoriesItem'
import data from "../pupularCategoriesData"
import { Link } from 'react-router-dom'

export default function PopularCategories() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1024, min: 640 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 640, min: 530 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 530, min: 0 },
      items: 2,
    },
  }
  return (
    <section className={style.popularCategories}>
      <h2 className={style.title}>Popular Categories</h2>
      <Carousel responsive={responsive}>
        {data.map((category, index) => (
          <Link to={`/store/shop/${category.route}`} className={style.a} key={index}><PopularCategoriesItem category={category} /></Link>
        ))}
      </Carousel>
    </section>
  )
}

