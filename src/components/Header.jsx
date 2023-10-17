import { RxHamburgerMenu } from 'react-icons/rx'
import { PiShoppingCartSimpleLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import style from './Header.module.css'
import Nav from './Nav'

export default function Header({ hamIsOpen, setHamIsOpen }) {
  function handleCloseClick() {
    setHamIsOpen(false)
  }

  function handleOpenClick() {
    setHamIsOpen(true)
  }

  return (
    <>
      <header className={style.header}>
        <RxHamburgerMenu
          className={style.hamburgerIcon}
          onClick={handleOpenClick}
        />
        <Link className={style.title}>
          <h2>Aureo & Co</h2>
        </Link>
        <Link className={style.cart}>
          <PiShoppingCartSimpleLight className={style.cartIcon} />
          <div className={style.cartNotification}>0</div>
        </Link>
      </header>
      <Nav hamIsOpen={hamIsOpen} handleClick={handleCloseClick} />
    </>
  )
}
