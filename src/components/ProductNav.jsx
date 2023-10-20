import style from './ProductNav.module.css'
import { Link } from 'react-router-dom'

export default function ProductNav({ category, name }) {
  const lowerCaseWord = category.toLowerCase()
  const capitalized =
    lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1)
  return (
    <p className={style.route}>
      <Link to={'/store/'} className={style.a}>
        Home
      </Link>{' '}
      &gt;{' '}
      <Link to={'/store/shop'} className={style.a}>
        Shop
      </Link>{' '}
      &gt;{' '}
      <Link to={`/store/shop/${category.toLowerCase()}`} className={style.a}>
        {capitalized}
      </Link>{' '}
      &gt; <span className={style.productName}>{name}</span>{' '}
    </p>
  )
}
