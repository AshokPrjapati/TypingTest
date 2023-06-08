import styles from "../../styles/Modal.module.css";

import Button from "../Button";
import Heading from "../typing/Heading";

const Modal = ({ isOpen, onClose, title, body, actionLabel }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal_content}>
        <Heading title={title} />
        <div>{body}</div>
        <hr />
        <div>
          <Button label={actionLabel} action={onClose} small />
        </div>
      </div>
    </div>
  );
};

export default Modal;
