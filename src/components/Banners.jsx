import style from './Banners.module.css'
import banner1 from '../assets/home-default-banner-1.jpg'
import banner2 from '../assets/home-default-banner-2.jpg'
import banner3 from '../assets/home-default-banner-3.jpg'
import Banner from './Banner'

export default function Banners() {
  const cards = [
    {
      title: 'Just Launched 2023 Collection',
      tag: '2023 Fashion',
      img: banner1,
      dark: false,
      cta: "See More"
    },
    {
      title: 'Necklace & Body Jewels',
      tag: 'Flat Discount',
      img: banner2,
      dark: false,
      cta: "Shop Now"
    },
    {
      title: 'Jewelry & Charm Rings',
      tag: 'New Collection',
      img: banner3,
      dark: true,
      cta: "Shop Now"
    },
  ]

  return (
    <section className={style.bannerContainer}>
      {cards.map((item, index) => (
        <Banner className={style.bannerItem} item={item} key={index} />
      ))}
    </section>
  )
}
