import style from './ProductCard.module.css'
import { Link } from 'react-router-dom'

export default function ProductCard({ trendy }) {
  const { name, img1, img2, price, category, tag, crossOutPrice } = trendy
  let color

  if (tag === '19% OFF' || tag === '20% OFF') {
    color = 'orange'
  } else if (tag === 'OUT OF STOCK') {
    color = 'gray'
  } else if (tag === 'HOT') {
    color = 'red'
  }

  return (
    <Link onClick= {() => window.scrollTo(0, 0)} to={`/store/product/${trendy.url}`} className={style.link}>
      <div className={style.card}>
        <figure>
          <img className={style.image} src={img1} alt={`${name} image`} />
          <img className={style.imageHover} src={img2} alt={`${name} image`} />
        </figure>
        <p className={style.category}>{category}</p>
        <p className={style.productName}>{name}</p>
        <div className={style.priceText}>
          <p className={style.price}>{price}</p>
          {crossOutPrice ? (
            <span className={style.crossOut}>{crossOutPrice}</span>
          ) : (
            ''
          )}
        </div>
        {tag ? <span className={`${style.tag} ${color}`}>{tag}</span> : ''}
      </div>
    </Link>
  )
}
