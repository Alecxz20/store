import style from "./Banner.module.css"

export default function Banner({item}) {
    const {title, img, tag, dark, cta} = item
  return (
    <div className={`${style.banner} ${dark ? style.dark : ""}`}>
        <img className={style.img} src={img} alt={`banner image: ${title}`} />
        <p className={style.tag}>{tag}</p>
        <h3 className={style.title}>{title}</h3>
        <p className={style.cta}>{cta}</p>
    </div>
  )
}
