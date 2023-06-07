import styles from "../../styles/Typing.module.css";

const Heading = ({ title, subtitle, center }) => {
  return (
    <div className={center ? styles.center : styles.default}>
      <div>{title}</div>
      <div>{subtitle}</div>
    </div>
  );
};

export default Heading;
