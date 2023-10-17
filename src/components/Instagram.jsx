import style from './Instagram.module.css'
import instagram1 from '../assets/Instagram-Image-1.jpg'
import instagram2 from '../assets/Instagram-Image-2.jpg'
import instagram3 from '../assets/Instagram-Image-3.jpg'
import instagram4 from '../assets/Instagram-Image-4.jpg'
import instagram5 from '../assets/Instagram-Image-5.jpg'
import instagram6 from '../assets/Instagram-Image-6.jpg'
import InstagramCard from './InstagramCard'

export default function Instagram() {
  const images = [
    instagram1,
    instagram2,
    instagram3,
    instagram4,
    instagram5,
    instagram6,
  ]

  return (
    <section className={style.instagramSection}>
      <h2 className={style.instagramTitle}>Follow Us on Instagram</h2>
      <p className={style.instagramUsername}>@aureo&co</p>
      <div className={style.cards}>
        {images.map((instaImg, index) => (
          <InstagramCard key={index} instaImg={instaImg} />
        ))}
      </div>
    </section>
  )
}
