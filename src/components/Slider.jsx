import style from './Slider.module.css'
import slider1 from '../assets/default-slider-1.jpg'
import slider2 from '../assets/default-slider-2.jpg'
import { useEffect, useState } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { BsDot } from 'react-icons/bs'
import { PiDotOutlineBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'

export default function Slider() {
  const items = [
    {
      title: 'Introducing the Lost Day Collection',
      img: slider1,
      text: 'Ring, Occasion pieces, Pandora and More collections',
    },
    {
      title: 'New 2023 Amazing Collection',
      img: slider2,
      text: 'A Symbol of Love and a Modern Take on Gold',
    },
  ]

  const [number, setNumber] = useState(0)
  const [slide, setSlide] = useState(items[number])

  useEffect(() => {
    setSlide(items[number])
  }, [number])

  const { title, img, text } = slide

  function onForward() {
    if (number === items.length - 1) {
      setNumber(0)
    } else {
      setNumber(number + 1)
    }
  }
  function onBackward() {
    if (number === 0) {
      setNumber(items.length - 1)
    } else {
      setNumber(number - 1)
    }
  }

  return (
    <div className={style.container}>
      <img className={style.image} src={img} alt="hero image" />
      <MdArrowBackIosNew className={style.arrowBack} onClick={onBackward} />
      <MdArrowForwardIos className={style.arrowForward} onClick={onForward} />
      <section className={style.info}>
        <h2 className={style.infoTitle}>{title}</h2>
        <p className={style.infoText}>{text}</p>
        <Link onClick={() => window.scrollTo(0, 0)} to={'/store/shop'}>
          <button className={`${style.infoButton}`}>Shop Now</button>
        </Link>
      </section>
      <div className={style.infoDots}>
        {items.map((dot, index) =>
          number === index ? (
            <PiDotOutlineBold className={`${style.dotOutline}`} key={index} />
          ) : (
            <BsDot className={`${style.dots}`} key={index} />
          )
        )}
      </div>
    </div>
  )
}
