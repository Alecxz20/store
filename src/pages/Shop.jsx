import Header from '../components/Header'
import { useState } from 'react'
import style from './Shop.module.css'
import ShopBg from '../components/ShopBg'
import ShopProducts from '../components/ShopProducts'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'

export default function Shop() {
  const [hamIsOpen, setHamIsOpen] = useState(false)
  const { category } = useParams()
  return (
    <div className={`${hamIsOpen ? style.dark : ''} ${style.shop}`}>
      <Header hamIsOpen={hamIsOpen} setHamIsOpen={setHamIsOpen} />
      <ShopBg category={category} />
      <ShopProducts category={category} />
      <Newsletter />
      <Footer />
    </div>
  )
}
