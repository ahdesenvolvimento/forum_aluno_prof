import styles from './TextArea.module.css'

function TextArea({ nome, id, cols, rows, placeholder }) {
  return (
    <>
      
      <textarea
        name={nome}
        id={id}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        className={styles.formStyle}
      ></textarea>
    </>
  );
}

export default TextArea;
