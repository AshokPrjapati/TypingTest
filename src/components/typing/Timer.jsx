import { formatTime } from "../../helper/formatTime";
import styles from "../../styles/Typing.module.css";

const Timer = ({ time }) => {
  let formatedTime = formatTime(time);
  return (
    <div className={styles.timer}>
      <div>
        Timer:<span>{formatedTime}</span>
      </div>
    </div>
  );
};

export default Timer;
