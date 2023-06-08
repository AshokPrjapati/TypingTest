import React from "react";
import styles from "../../styles/Signup.module.css";

const Input = ({ name, onChange, type, ref, placeholder, required = true }) => {
  return (
    <div className={styles.input_container}>
      <input
        name={name}
        type={type}
        ref={ref}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;
