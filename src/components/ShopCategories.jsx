import style from './ShopCategories.module.css'
import { Link } from 'react-router-dom'

export default function ShopCategories() {
  return (
    <div className={style.categories}>
      <h3 className={style.categoriesTitle}>Categories</h3>
      <ul className={style.links}>
        <Link onClick= {() => window.scrollTo(0, 0)} className={style.a} to={'/store/shop'}>
          <li className={style.linksItem}>Special Offer!</li>
        </Link>
        <Link onClick= {() => window.scrollTo(0, 0)} className={style.a} to={'/store/shop/necklaces'}>
          <li className={style.linksItem}>Necklaces</li>
        </Link>
        <Link onClick= {() => window.scrollTo(0, 0)} className={style.a} to={'/store/shop/rings'}>
          <li className={style.linksItem}>Rings</li>
        </Link>
        <Link onClick= {() => window.scrollTo(0, 0)} className={style.a} to={'/store/shop/bracelets'}>
          <li className={style.linksItem}>Bracelets</li>
        </Link>
        <Link onClick= {() => window.scrollTo(0, 0)} className={style.a} to={'/store/shop/earrings'}>
          <li className={style.linksItem}>Earrings</li>
        </Link>
        <Link onClick= {() => window.scrollTo(0, 0)} className={style.a} to={'/store/shop/charms'}>
          <li className={style.linksItem}>Charms and Dangles</li>
        </Link>
      </ul>
    </div>
  )
}
