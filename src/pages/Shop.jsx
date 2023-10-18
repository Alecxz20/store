import Header from '../components/Header'
import { useState } from 'react'
import style from './Shop.module.css'
import ShopBg from '../components/ShopBg'
import ShopProducts from '../components/ShopProducts'
import Newsletter from '../components/Newsletter'
import Footer from "../components/Footer"

export default function Shop() {
  const [hamIsOpen, setHamIsOpen] = useState(false)
  return (
    <div className={`${hamIsOpen ? style.dark : ''} ${style.shop}`}>
      <Header hamIsOpen={hamIsOpen} setHamIsOpen={setHamIsOpen} />
      <ShopBg />
      <ShopProducts />
      <Newsletter />
      <Footer />
    </div>
  )
}
