import style from './ShopList.module.css'
import products from '../products'
import ProductCard from './ProductCard'
import { useEffect, useState } from 'react'
import ShopBtns from './ShopBtns'
import Error from './Error'

export default function ShopList({ category }) {
  const [showProducts, setShowProducts] = useState([])
  const [page, setPage] = useState(1)
  const total = products.length

  let firstPage
  let secondPage

  let low
  let high
  let max

  let error = false

  if (!category) {
    if (products.length > 12) {
      firstPage = products.filter((item) => products.indexOf(item) < 12)
      secondPage = products.filter((item) => products.indexOf(item) >= 12)
      max = products.length
      low = 1
      high = firstPage.length
    } else if ((products.length > 0) & (products.length <= 12)) {
      firstPage = products
    }
  } else {
    firstPage = products.filter(
      (item) => item.category === category.toUpperCase()
    )
    firstPage.length < 1 ? (error = true) : ""
    max = firstPage.length
    error ? (low = 0) : (low = 1)
    high = firstPage.length
  }

  useEffect(() => setShowProducts(firstPage), [category])

  function onClickNext() {
    setShowProducts(secondPage)
    setPage(2)
  }

  function onClickPrev() {
    setShowProducts(firstPage)
    setPage(1)
  }

  return (
    <div className={style.listContainer}>
      {!error ? (
        <p className={style.text}>
          {page === 1 ? `${low} - ${high}` : `13 - ${total}`} products of {max}{' '}
          products
        </p>
      ) : (
        ''
      )}
      <div className={style.list}>
        {showProducts?.map((product, index) => (
          <ProductCard key={index} trendy={product} />
        ))}
      </div>
      {secondPage?.length > 0 ? (
        <ShopBtns
          onClickPrev={onClickPrev}
          onClickNext={onClickNext}
          page={page}
        />
      ) : (
        ''
      )}
      {error ? <Error /> : ''}
    </div>
  )
}
