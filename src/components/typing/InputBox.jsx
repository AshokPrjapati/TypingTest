import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Typing.module.css";

import {
  setCurrentKey,
  updateKeyCount,
  updateUserInput,
} from "../../redux/typing/typing.action";
import { getRandomKey } from "../../helper/getRandomKeys";

const InputBox = ({ inputRef }) => {
  const { referenceKeys, isTyping } = useSelector((store) => store.typing);
  const dispatch = useDispatch();

  const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"];

  const handleChange = (e) => {
    // set random key as current key
    let randomKey = getRandomKey(keys);
    dispatch(setCurrentKey(randomKey));

    const inputValue = inputRef.current.value;

    // value typed by user
    let currentValue = "";

    // show only currently typed value in input field
    if (inputValue.length > 1) {
      currentValue = inputValue.charAt(1);
      inputRef.current.value = currentValue;
    } else {
      currentValue = inputRef.current.value;
      inputRef.current.value = currentValue;
    }

    // set typedKeys array - array contains all keys typed by user
    dispatch(updateUserInput(currentValue));

    // check currentvalue and random value and return boolean
    let isMatched;

    if (referenceKeys.length === 0) isMatched = true;
    else isMatched = referenceKeys[referenceKeys.length - 1] === currentValue;

    console.log(randomKey, currentValue);
    // update state
    dispatch(updateKeyCount(randomKey, isMatched));
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
