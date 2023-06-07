import styles from "../styles/Typing.module.css";

const Button = ({ label, action, small }) => {
  return (
    <button
      className={small ? styles.small_button : styles.default_button}
      onClick={action}
    >
      {label}
    </button>
  );
};

export default Button;
