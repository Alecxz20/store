import style from './CurrentProduct.module.css'
import ProductNav from './ProductNav'
import ProductImages from './ProductImages'
import ProductDescription from './ProductDescription'
import AutumnCollection from './AutumnCollection'
import Newsletter from './Newsletter'
import Footer from './Footer'

export default function CurrentProduct({ thisProduct }) {
  const { name, category } = thisProduct

  return (
    <div className={style.currentProduct}>
      <ProductNav name={name} category={category} />
      <div className={style.inHalf}>
        <ProductImages thisProduct={thisProduct} />
        <ProductDescription thisProduct={thisProduct} />
      </div>
      <AutumnCollection />
      <Newsletter />
      <Footer />
    </div>
  )
}
