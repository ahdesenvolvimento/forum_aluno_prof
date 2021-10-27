import styles from './Input.module.css'
function Input({type, name, id, onChange, value, placeHolder, text}){

    return (
        <div>
            <div className={styles.formGroup}>
                <label htmlFor={name}>{text}</label>
                <input 
                    type={type}
                    name={name}
                    id={id}
                    onChange={onChange}
                    placeholder={placeHolder}
                    value={value}
                    className={styles.formStyle}
                />
            </div>
        </div>
    )
}

export default Input