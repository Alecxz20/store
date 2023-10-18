import style from './ShopCategories.module.css'

export default function ShopCategories() {
  return (
    <div className={style.categories}>
      <h3 className={style.categoriesTitle}>Categories</h3>
      <ul className={style.links}>
        <li className={style.linksItem}>Special Offer!</li>
        <li className={style.linksItem}>Necklace</li>
        <li className={style.linksItem}>Rings</li>
        <li className={style.linksItem}>Bracelets</li>
        <li className={style.linksItem}>Earrings</li>
        <li className={style.linksItem}>Charms and Dangles</li>
      </ul>
    </div>
  )
}
