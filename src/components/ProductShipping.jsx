import style from './ProductShipping.module.css'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { BsShieldCheck } from 'react-icons/bs'
import { PiHandshakeLight } from 'react-icons/pi'
import { HiArrowPath } from 'react-icons/hi2'

export default function ProductShipping() {
  return (
    <div className={style.container}>
      <div className={style.shippingItem}>
        <LiaShippingFastSolid className={style.icon} />
        <p>Free Shipping</p>
      </div>
      <div className={style.shippingItem}>
        <BsShieldCheck className={style.icon} />
        <p>1 Year Warranty</p>
      </div>
      <div className={style.shippingItem}>
        <PiHandshakeLight className={style.icon} />
        <p>Secure payment</p>
      </div>
      <div className={style.shippingItem}>
        <HiArrowPath className={style.icon} />
        <p>30 Days Return</p>
      </div>
    </div>
  )
}
