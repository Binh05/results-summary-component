import styles from './Button.module.scss'

export default function Button({ text }) {
    return (
        <button className={styles.button} type="button">
            {text}
        </button>
    )
}