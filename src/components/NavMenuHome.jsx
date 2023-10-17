import style from "./NavMenuHome.module.css"

export default function NavMenuHome() {
  return (
    <ul className={style.links}>
      <li className={style.linksItem}>Special Offers!</li>
      <li className={style.linksItem}>Necklace</li>
      <li className={style.linksItem}>Rings</li>
      <li className={style.linksItem}>Bracelets</li>
      <li className={style.linksItem}>Earrings</li>
      <li className={style.linksItem}>Charms and Dangles</li>
    </ul>
  )
}