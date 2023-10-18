import style from './Error.module.css'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className={style.container}>
      <h2 className={style.title}>404</h2>
      <h4 className={style.description}>
        This page has been probably moved somewhere...
      </h4>
      <p className={style.text}>Please back to homepage or check our offer</p>
      <Link to={"/store/"}><button className={style.btn}>Back To Homepage</button></Link>
    </div>
  )
}
