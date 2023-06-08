import styles from "../../styles/Typing.module.css";

const Heading = ({ title, subtitle, center, small }) => {
  return (
    <div
      className={`${center ? styles.center : styles.default} ${
        small ? styles.small_heading : styles.default
      }`}
    >
      <div>{title}</div>
      {subtitle && <div>{subtitle}</div>}
    </div>
  );
};

export default Heading;
