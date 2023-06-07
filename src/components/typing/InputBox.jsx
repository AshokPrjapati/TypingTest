import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Typing.module.css";
import {
  setCurrentKey,
  updateKeyCount,
  updateUserInput,
} from "../../redux/typing/typing.action";
import { getRandomKey } from "../../helper/getRandomKeys";
import { useEffect, useState } from "react";

const InputBox = ({ inputRef }) => {
  const { referenceKeys, isTyping, accuracy } = useSelector(
    (store) => store.typing
  );
  const dispatch = useDispatch();

  const keys = ["a", "s", "d", "e", "f", "g", "h", "j", "k", "l", ";", '"'];

  const handleChange = (e) => {
    // set random key as current key
    let randomKey = getRandomKey(keys);
    dispatch(setCurrentKey(randomKey));

    const inputValue = inputRef.current.value;

    // show only currently typed value in input field
    if (inputValue.length > 1) {
      const updatedValue = inputValue.charAt(1);
      inputRef.current.value = updatedValue;

      // set typedKeys array - array contains all keys typed by user
      dispatch(updateUserInput(updatedValue));
      dispatch(
        updateKeyCount(
          randomKey,
          referenceKeys[referenceKeys.length - 1] === updatedValue
        )
      );
    }
  };

  useEffect(() => {
    if (!isTyping) inputRef.current.value = "";
  }, [isTyping, handleChange]);

  return (
    <div className={styles.input_box}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Type... Start Test"
        onChange={handleChange}
      />
    </div>
  );
};

export default InputBox;
