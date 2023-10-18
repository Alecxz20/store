import style from './NavMenuHome.module.css'
import { Link } from 'react-router-dom'

export default function NavMenuHome() {
  return (
    <ul className={style.links}>
      <Link to={'/store/shop'} className={style.a}>
        <li className={style.linksItem}>Special Offers!</li>
      </Link>
      <Link to={'/store/shop/necklaces'} className={style.a}>
        <li className={style.linksItem}>Necklaces</li>
      </Link>
      <Link to={'/store/shop/rings'} className={style.a}>
        <li className={style.linksItem}>Rings</li>
      </Link>
      <Link to={'/store/shop/bracelets'} className={style.a}>
        <li className={style.linksItem}>Bracelets</li>
      </Link>
      <Link to={'/store/shop/earrings'} className={style.a}>
        <li className={style.linksItem}>Earrings</li>
      </Link>
      <Link to={'/store/shop/charms'} className={style.a}>
        <li className={style.linksItem}>Charms and Dangles</li>
      </Link>
    </ul>
  )
}
