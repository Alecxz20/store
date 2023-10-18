import style from './ShopBg.module.css'

export default function ShopBg({ category }) {
  let word
  if (category) {
    word = category.charAt(0).toUpperCase() + category.slice(1)
  }
  return (
    <div className={style.shopBg}>
      <h2 className={style.title}>Shop</h2>
      <p className={style.text}>
        Home &gt; Shop {category ? `> ${word}` : ''}
      </p>
    </div>
  )
}
