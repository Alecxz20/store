import style from './Newsletter.module.css'

export default function Newsletter() {
  return (
    <section className={style.container}>
      <h3 className={style.title}>Subscribe Newsletter</h3>
      <p className={style.text}>
        Sing up to our Newsletter and get the discount code.
      </p>
      <div className={style.form}>
        <input className={style.input} type="email" placeholder="Email Address" />
        <button className={style.btn} >SUBSCRIBE</button>
      </div>
    </section>
  )
}
