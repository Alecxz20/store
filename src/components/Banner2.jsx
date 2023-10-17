import style from './Banner2.module.css'

export default function Banner2({ item }) {
  const { title, img, tag, dark, cta } = item
  return (
    <div className={`${style.banner} ${dark ? style.dark : ''}`}>
      <img className={style.img} src={img} alt={`banner image: ${title}`} />
      <div className={style.text}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.tag}>{tag}</p>
      </div>
      <p className={style.cta}>{cta}</p>
    </div>
  )
}
