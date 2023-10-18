import style from './ShopBtns.module.css'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'

export default function ShopBtns({ page, onClickNext, onClickPrev }) {
  return (
    <div className={style.btnContainer}>
      {page === 1 ? '' : <HiArrowNarrowLeft onClick={onClickPrev} className={style.icon} />}
      <h2 className={`${page === 1 ? 'selected' : ''} ${style.page}`} onClick={onClickPrev}>1</h2>
      <h2 className={`${page === 2 ? 'selected' : ''} ${style.page}`} onClick={onClickNext}>2</h2>
      {page === 2 ? '' : <HiArrowNarrowRight onClick={onClickNext} className={style.icon} />}
    </div>
  )
}

// HiArrowNarrowLeft
// HiArrowNarrowRight
