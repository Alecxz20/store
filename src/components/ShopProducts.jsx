import ShopCategories from './ShopCategories'
import ShopList from './ShopList'
import style from './ShopProducts.module.css'

export default function ShopProducts({category}) {
  return (
    <section className={style.shop}>
      <div className={style.shopContainer}>
        <div className={style.categories}>
          <ShopCategories />
        </div>
        <div className={style.list}>
          <ShopList category={category} />
        </div>
      </div>
    </section>
  )
}
