import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import styles from "../../styles/Typing.module.css";

import { wpmCalculator } from "../../helper/wpmCalculator";

const WPM = ({ time }) => {
  const { typedKeys } = useSelector((store) => store.typing);
  let wpmRef = useRef(0);

  useEffect(() => {
    wpmRef.current = wpmCalculator(typedKeys.length, time);
  }, [time, typedKeys]);

  return (
    <div className={styles.timer}>
      <div>
        WPM:
        <span
          style={{
            color: wpmRef.current < 5 ? "var(--c-red)" : "var(--c-green)",
          }}
        >
          {wpmRef?.current || 0.0}
        </span>
      </div>
    </div>
  );
};

export default WPM;
