import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { startTimer } from "../redux/typing/typing.action";

import Heading from "../components/typing/Heading";
import InputBox from "../components/typing/InputBox";
import KeyContainer from "../components/typing/KeyContainer";
import Button from "../components/Button";

import styles from "../styles/Typing.module.css";
import Timer from "../components/typing/Timer";
import useTimer from "../hooks/useTimer";

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

  return (
    <div className={styles.container}>
      <Heading
        title="Welcome to Typing Test"
        subtitle="Improve your touch typing by practice"
        center
      />
      <KeyContainer />
      <InputBox inputRef={inputRef} />

      {!isTyping && <Button label="Start Test" action={runTimer} />}
      {isTyping && <Timer time={time} />}
    </div>
  );
};

export default Typing;
