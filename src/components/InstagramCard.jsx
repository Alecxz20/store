import style from './InstagramCard.module.css'
import { BsInstagram } from 'react-icons/bs'

export default function InstagramCard({instaImg, key}) {
  return (
    <figure className={style.cardImages}>
      <img className={style.firstImg} src={instaImg} alt={`instagram picture number ${key} `} />
      <div className={style.secondImg}>
        <BsInstagram className={style.igIcon} />
      </div>
    </figure>
  )
}
