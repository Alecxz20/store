import style from "./FindStoreDiv.module.css"
import { AiOutlineHome } from "react-icons/ai";

export default function FindStoreDiv() {
  return (
    <section className={style.container}>
        <AiOutlineHome className={style.icon}/>
        <p className={style.text}>Find Jewelry Shops Near You</p>
        <button className={style.btn}>Find Store</button>
    </section>
  )
}
