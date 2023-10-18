import style from './InstagramCard.module.css'
import { BsInstagram } from 'react-icons/bs'

export default function InstagramCard({instaImg, index}) {
  return (
    <figure className={style.cardImages}>
      <img className={style.firstImg} src={instaImg} alt={`instagram picture number ${index} `} />
      <div className={style.secondImg}>
        <BsInstagram className={style.igIcon} />
      </div>
    </figure>
  )
}
