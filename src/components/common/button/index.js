import styles from'./Button.module.scss'

function Button({ children, theme, onClick }) {
    return (
        <button className={`${styles[theme]} ${styles.btn}`} onClick={onClick}>
            {children}
            <i className={`fa-solid fa-arrow-right ${styles.arrow}`}></i>
        </button>
    )
}
export default Button;