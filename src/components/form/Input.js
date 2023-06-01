import styles from "./Input.module.css"

function Input({ tipo, place }) {
    return (
        <div>
            <input className={styles.inputContainer} type={tipo} placeholder={place}></input>
        </div>
    )
}

export default Input