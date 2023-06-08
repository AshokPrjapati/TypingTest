import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "../../styles/Modal.module.css";

import Modal from "./Modal";
import { wpmCalculator } from "../../helper/wpmCalculator";

const ResultModal = ({ isOpen, onClose, time }) => {
  const { isTyping, typedKeys, correctKeyCount, accuracy } = useSelector(
    (store) => store.typing
  );

  let wpm = 0;
  if (!isTyping) wpm = wpmCalculator(typedKeys.length, time);

  // modal body
  const bodyContent = (
    <div className={styles.body_content}>
      <div>
        <div>No. of total typed Keys:</div>
        <span>{typedKeys.length}</span>
      </div>
      <div>
        <div> No. of corrected typed Keys:</div>
        <span>{correctKeyCount}</span>
      </div>
      <div>
        <div>Time taken:</div>
        <span>{time} Sec</span>
      </div>
      <div>
        WPM:
        <span
          style={{
            color: wpm < 5 ? "var(--c-red)" : "var(--c-green)",
          }}
        >
          {wpm || 0}
        </span>
      </div>
      <div>
        Accuracy:
        <span
          style={{
            color: accuracy < 50 ? "var(--c-red)" : "var(--c-green)",
          }}
        >
          {accuracy} %
        </span>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={"Touch typing Result"}
      actionLabel="Close"
      body={bodyContent}
    />
  );
};

export default ResultModal;
