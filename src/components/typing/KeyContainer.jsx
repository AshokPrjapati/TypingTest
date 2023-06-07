import { useSelector } from "react-redux";
import styles from "../../styles/Typing.module.css";

const KeyContainer = () => {
  const isTyping = useSelector((store) => store.typing.isTyping);
  if (!isTyping)
    return (
      <div className={styles.key_message}>
        Click <span>Start Test</span> to start practice
      </div>
    );
  return <div className={styles.key_container}>A</div>;
};

export default KeyContainer;
