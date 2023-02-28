import styles from './button.module.scss'

function Button(props) {

  return (
    <button className={styles.buttonComponent}>{props.buttonText}</button>
  )
}

export default Button