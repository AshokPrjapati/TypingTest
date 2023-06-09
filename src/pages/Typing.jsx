import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { startTimer, timerFinished } from "../redux/typing/typing.action";

import Heading from "../components/typing/Heading";
import InputBox from "../components/typing/InputBox";
import KeyContainer from "../components/typing/KeyContainer";
import Button from "../components/Button";
import Timer from "../components/typing/Timer";
import Accuracy from "../components/typing/Accuracy";
import ResultModal from "../components/modal/ResultModal";
import WPM from "../components/typing/WPM";

import useTimer from "../hooks/useTimer";
import useToggle from "../hooks/useToggle";

import styles from "../styles/Typing.module.css";

const Typing = () => {
  const disptach = useDispatch();
  const { isTyping, typedKeys } = useSelector((store) => store.typing);

  const { isOpen, onOpen, onClose } = useToggle();

  const time = useTimer(isTyping);
  const inputRef = useRef(null);

  const runTimer = useCallback(() => {
    // auto focus to input for type
    inputRef.current.focus();
    // startTimer
    disptach(startTimer());
  }, [disptach]);

  const endTimer = useCallback(() => {
    // stopTimer
    disptach(timerFinished());
  }, [timerFinished]);

  // open modal when typing window is completed or typing stopped
  useEffect(() => {
    if (!isTyping && typedKeys.length) onOpen();
  }, [isTyping]);

  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        {!isTyping && (
          <Heading
            title="Welcome to Typing Test"
            subtitle="Improve your touch typing by practice"
            center
          />
        )}

        <KeyContainer />
        <InputBox inputRef={inputRef} />

        {isTyping ? (
          <>
            <div className={styles.statics}>
              <Timer time={time} />
              <Accuracy />
              <WPM time={time} />
            </div>
            <Button label="Stop Test" action={endTimer} small />
          </>
        ) : (
          <Button label="Start Test" action={runTimer} />
        )}

        {isOpen && (
          <ResultModal isOpen={isOpen} onClose={onClose} time={time} />
        )}
      </div>
    </div>
  );
};

export default Typing;
