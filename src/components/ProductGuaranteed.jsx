import style from './ProductGuaranteed.module.css'
import guaranteedImg from '../assets/trust_badge.png'

export default function ProductGuaranteed() {
  return (
    <div>
      <fieldset className={style.fieldset}>
        <legend className={style.legend}>Guaranteed Safe Checkout</legend>
        <img className={style.img} src={guaranteedImg} alt="Safe Checkout image" />
      </fieldset>
    </div>
  )
}
