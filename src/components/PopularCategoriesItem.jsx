import styles from './PopularCategoriesItem.module.css'

export default function PopularCategoriesItem({category}) {
  const {name, image} = category
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={`${name} image`} />
      <h3 className={styles.productName}>{name}</h3>
    </div>
  )
}
