import styles from './Form.module.css'
import Input from './Input'
import Button from './Button'

function Form() {

    function submeter(e) {
        e.preventDefault()
        console.log("Submeteuuuu!!")
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={submeter}>
                <Input tipo="email" place="Digite seu email" />
                <Input tipo="password" place="Digite sua senha" />
                <Button />
            </form>
        </div>
    )
}

export default Form