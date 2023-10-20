import { useState } from 'react'
import style from './ProductDescription.module.css'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { LuCalendarClock } from 'react-icons/lu'
import ProductShipping from './ProductShipping'
import ProductGuaranteed from './ProductGuaranteed'

export default function ProductDescription({ thisProduct }) {
  const { name, price, description, availability, category } = thisProduct
  const [quantity, setQuantity] = useState(1)
  function onAdding() {
    setQuantity(quantity + 1)
  }
  function onSubtracting() {
    if (quantity === 1) return
    setQuantity(quantity - 1)
  }

  const today = new Date()
  const fourdays = today.setDate(today.getDate() + 4)
  const sixdays = today.setDate(today.getDate() + 2)

  function toDate(longDate) {
    return new Date(longDate).toDateString().split(' ').splice(1, 2).join(' ')
  }

  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>{name}</h1>
        <p className={style.price}>{price}</p>
      </div>
      <p className={style.description}>{description}</p>
      <p className={style.availabilityContainer}>
        Availability:{' '}
        <span className={availability === 'In stock' ? style.green : style.red}>
          {availability}
        </span>
      </p>
      <div className={style.btnContainer}>
        <div className={style.btnQuantity}>
          <AiOutlineMinus onClick={onSubtracting} className={style.btn} />
          <span>{quantity}</span>
          <AiOutlinePlus onClick={onAdding} className={style.btn} />
        </div>
        <button className={style.addCart}>ADD TO CART</button>
      </div>
      <p className={style.delivery}>
        <LuCalendarClock className={style.deliveryIcon} />
        <span className={style.estimated}>Estimated Delivery:</span>
        <span className={style.date}>{toDate(fourdays)} - {toDate(sixdays)}</span>
      </p>
      <ProductShipping />
      <ProductGuaranteed />
      <p className={style.category}>
        Category:{' '}
        <span>
          {category.toLowerCase().charAt(0).toUpperCase() +
            category.toLowerCase().slice(1)}
        </span>
      </p>
    </div>
  )
}
