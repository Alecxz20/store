import { TfiClose } from "react-icons/tfi";
import style from "./Nav.module.css"
import NavMenu from "./NavMenu";


export default function Nav({handleClick, hamIsOpen}) {
  return (
      <nav className={`${style.navbar} ${hamIsOpen ? "unHide" : ""}`}>
        <div className={style.navbarHeader}>
          <h2 className="navHeaderTitle">Aureo & Co</h2>
          <TfiClose onClick={handleClick} />
        </div>
        <NavMenu />
      </nav>
  )
}
