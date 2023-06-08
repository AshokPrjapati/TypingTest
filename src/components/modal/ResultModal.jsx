import React from "react";
import { useSelector } from "react-redux";

import styles from "../../styles/Modal.module.css";

import Modal from "./Modal";

const ResultModal = ({ isOpen, onClose }) => {
  const { referenceKeys, typedKeys, correctKeyCount, accuracy } = useSelector(
    (store) => store.typing
  );
  console.log(isOpen);
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
        Accuracy:
        <span
          style={{
            color: accuracy < 50 ? "var(--c-red)" : "var(--c-green)",
          }}
        >
          {accuracy}
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
