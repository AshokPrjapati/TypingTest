import { useCallback } from "react";
import Heading from "../components/typing/Heading";
import InputBox from "../components/typing/InputBox";
import KeyContainer from "../components/typing/KeyContainer";
import styles from "../styles/Typing.module.css";
import Button from "../components/Button";

const Typing = () => {
  const startTimer = useCallback(() => {}, []);

  return (
    <div className={styles.container}>
      <Heading
        title="Welcome to Typing Test"
        subtitle="Improve your touch typing by practice"
        center
      />
      <KeyContainer />
      <InputBox />
      <Button label="Start Test" action={startTimer} />
    </div>
  );
};

export default Typing;
