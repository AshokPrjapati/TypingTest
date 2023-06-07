import styles from "../../styles/Typing.module.css";

const InputBox = ({ inputRef }) => {
  return (
    <div className={styles.input_box}>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default InputBox;
