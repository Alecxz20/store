import { useState, useEffect } from 'react'
import style from './ProductImages.module.css'

export default function ProductImages({ thisProduct }) {
  const { img1, img2, img3 } = thisProduct
  const [mainImg, setMainImg] = useState(img1)
  useEffect(() => setMainImg(thisProduct.img1), [thisProduct])

  return (
    <div className={style.imagesContainer}>
      <div className={style.thumbnails}>
        <img
          className={`${mainImg === img1 ? style.selected : ''} ${
            style.thumbnail
          }`}
          onClick={() => setMainImg(img1)}
          src={img1}
          alt="first product image"
        />
        <img
          className={`${mainImg === img2 ? style.selected : ''} ${
            style.thumbnail
          }`}
          onClick={() => setMainImg(img2)}
          src={img2}
          alt="second product image"
        />
        <img
          className={`${mainImg === img3 ? style.selected : ''} ${
            style.thumbnail
          }`}
          onClick={() => setMainImg(img3)}
          src={img3}
          alt="third product image"
        />
      </div>
      <img className={style.mainImg} src={mainImg} alt="main product image" />
    </div>
  )
}
