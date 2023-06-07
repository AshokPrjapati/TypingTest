import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "../../styles/Typing.module.css";

import {
  setCurrentKey,
  updateKeyCount,
  updateUserInput,
} from "../../redux/typing/typing.action";

import { getRandomKey } from "../../helper/getRandomKeys";

const InputBox = ({ inputRef }) => {
  const { currentKey, isTyping } = useSelector((store) => store.typing);
  const dispatch = useDispatch();

  const [isMatched, setMatched] = useState(true);

  const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"];

  // handle the action based on user input
  const handleChange = (e) => {
    // set random key as current key
    let randomKey = getRandomKey(keys);
    dispatch(setCurrentKey(randomKey));

    const inputValue = inputRef.current.value;

    // value typed by user
    let currentInputValue = "";

    // show only currently typed value in input field
    if (inputValue.length > 1) {
      currentInputValue = inputValue.charAt(1);
      inputRef.current.value = currentInputValue;
    } else {
      currentInputValue = inputRef.current.value;
      inputRef.current.value = currentInputValue;
    }

    // set typedKeys array - array contains all keys typed by user
    dispatch(updateUserInput(currentInputValue));

    // compare currentInputvalue and current random value and return boolean
    let isMatched = currentKey === currentInputValue;

    setMatched(isMatched);

    // update state
    dispatch(updateKeyCount(randomKey, isMatched));
  };

  useEffect(() => {
    if (!isTyping) inputRef.current.value = "";
  }, [isTyping, handleChange]);

  return (
    <>
      <div className={styles.input_box}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Type... Start Test"
          onChange={handleChange}
        />
      </div>

      {isTyping &&
        (isMatched ? (
          <div className={styles.info}>
            Same character may be in sequence so don't confuse
          </div>
        ) : (
          <div className={styles.alert}>You mistyped this character!</div>
        ))}
    </>
  );
};

export default InputBox;
