import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { startTimer, timerFinished } from "../redux/typing/typing.action";

import Heading from "../components/typing/Heading";
import InputBox from "../components/typing/InputBox";
import KeyContainer from "../components/typing/KeyContainer";
import Button from "../components/Button";

import styles from "../styles/Typing.module.css";
import Timer from "../components/typing/Timer";
import useTimer from "../hooks/useTimer";
import Accuracy from "../components/typing/Accuracy";

const Typing = () => {
  const disptach = useDispatch();
  const isTyping = useSelector((store) => store.typing.isTyping);
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
  }, [disptach]);

  return (
    <div className={styles.container}>
      <Heading
        title="Welcome to Typing Test"
        subtitle="Improve your touch typing by practice"
        center
      />
      <KeyContainer />
      <InputBox inputRef={inputRef} />

      {isTyping ? (
        <>
          <Timer time={time} />
          <Accuracy />
          <Button label="Stop Test" action={endTimer} small />
        </>
      ) : (
        <Button label="Start Test" action={runTimer} />
      )}
    </div>
  );
};

export default Typing;
