import style from './Product.module.css'
import products from '../products'
import Header from '../components/Header'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import CurrentProduct from '../components/CurrentProduct'
import Error from '../components/Error'

export default function Product() {
  const { productName } = useParams()
  const [hamIsOpen, setHamIsOpen] = useState(false)

  const thisProduct = products.find((item) => item.url === productName)

  return (
    <div className={`${hamIsOpen ? style.dark : ''} ${style.product}`}>
      <Header hamIsOpen={hamIsOpen} setHamIsOpen={setHamIsOpen} />
      {thisProduct ? <CurrentProduct thisProduct={thisProduct} /> : <Error />}
    </div>
  )
}
