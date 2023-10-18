import style from './ShopList.module.css'
import products from '../products'
import ProductCard from './ProductCard'
import { useState } from 'react'
import ShopBtns from './ShopBtns'

export default function ShopList() {
  const total = products.length
  let firstPage
  total > 12
    ? (firstPage = products.filter((item) => products.indexOf(item) < 12))
    : (firstPage = total)

  const [showProducts, setShowProducts] = useState(firstPage)
  const [page, setPage] = useState(1)

  const secondPage = products.filter((item) => products.indexOf(item) >= 12)

  function onClickNext() {
    setShowProducts(secondPage)
    setPage(2)
  }

  function onClickPrev() {
    setShowProducts(firstPage)
    setPage(1)
  }

  return (
    <div className={style.listContainer} id='top'>
      <p className={style.text}>
        {page === 1 ? '1 - 12' : `13 - ${total}`} products of {total} products
      </p>
      <div className={style.list}>
        {showProducts.map((product, index) => (
          <ProductCard key={index} trendy={product} />
        ))}
      </div>
      {secondPage.length > 0 ? (
        <ShopBtns onClickPrev={onClickPrev} onClickNext={onClickNext} page={page} />
      ) : (
        ''
      )}
    </div>
  )
}
