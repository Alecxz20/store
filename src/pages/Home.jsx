import Header from '../components/Header'
import { useState } from 'react'
import style from "./Home.module.css"
import NavMenuHome from '../components/NavMenuHome'
import Slider from '../components/Slider'
import Banners from '../components/Banners'
import PopularCategories from '../components/PopularCategories'
import TrendyCollection from '../components/TrendyCollection'
import FindStoreDiv from '../components/FindStoreDiv'
import AutumnCollection from '../components/AutumnCollection'
import Banners2 from '../components/Banners2'
import Instagram from '../components/Instagram'
import Newsletter from '../components/NewsLetter'
import Footer from '../components/Footer'

export default function Home() {
  const [hamIsOpen, setHamIsOpen] = useState(false)
  return (
    <div className={`${hamIsOpen ? style.dark : ""} ${style.homepage}`}>
      <Header hamIsOpen={hamIsOpen} setHamIsOpen={setHamIsOpen} />
      <NavMenuHome />
      <Slider />
      <Banners />
      <PopularCategories />
      <TrendyCollection />
      <FindStoreDiv />
      <AutumnCollection />
      <Banners2 />
      <Instagram />
      <Newsletter />
      <Footer />
    </div>
  )
}
