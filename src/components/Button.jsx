import styles from "../styles/Typing.module.css";

const Button = ({
  type = "button",
  label,
  action,
  small,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={small ? styles.small_button : styles.default_button}
      onClick={action}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
