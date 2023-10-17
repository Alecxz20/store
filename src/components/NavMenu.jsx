import style from "./NavMenu.module.css"

export default function NavMenu() {
  return (
    <ul className={style.links}>
      <li className={style.linksItem}>Special Offer!</li>
      <li className={style.linksItem}>Necklace</li>
      <li className={style.linksItem}>Rings</li>
      <li className={style.linksItem}>Bracelets</li>
      <li className={style.linksItem}>Earrings</li>
      <li className={style.linksItem}>Charms and Dangles</li>
    </ul>
  )
}
