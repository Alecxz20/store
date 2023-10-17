import style from './Banners2.module.css'
import img1 from '../assets/home-default-banner-4.jpg'
import img2 from '../assets/home-default-banner-5.jpg'
import Banner2 from './Banner2'

export default function Banners2() {
  const cards = [
    {
      title: 'New Bangles Collection',
      tag: 'Catch the highlight in the roof',
      img: img1,
      dark: false,
      cta: 'Shop More',
    },
    {
      title: 'Culture of Ring Design',
      tag: 'Cartier collection',
      img: img2,
      dark: false,
      cta: 'Shop More',
    },
  ]

  return (
    <section className={style.bannerContainer}>
      {cards.map((item, index) => (
        <Banner2 className={style.bannerItem} item={item} key={index} />
      ))}
    </section>
  )
}
