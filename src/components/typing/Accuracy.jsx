import React from "react";
import { useSelector } from "react-redux";

import styles from "../../styles/Typing.module.css";

const Accuracy = () => {
  const { accuracy } = useSelector((store) => store.typing);
  return (
    <div className={styles.timer}>
      <div>
        Accuracy:<span>{accuracy}</span>
      </div>
    </div>
  );
};

export default Accuracy;
