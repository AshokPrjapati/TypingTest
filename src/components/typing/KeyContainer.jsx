import { useSelector } from "react-redux";
import styles from "../../styles/Typing.module.css";

import { getRandomKey } from "../../helper/getRandomKeys";
import React, { useEffect } from "react";

const KeyContainer = () => {
  const { isTyping, currentKey } = useSelector((store) => store.typing);

  if (!isTyping) {
    return (
      <div className={styles.key_message}>
        Click <span>Start Test</span> to start practice
      </div>
    );
  }

  return <div className={styles.key_container}>{currentKey}</div>;
};

export default React.memo(KeyContainer);
