import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Signup.module.css";

import Input from "../components/auth/Input";
import Heading from "../components/typing/Heading";
import Button from "../components/Button";

const Signin = () => {
  const defaultValues = { email: "", password: "" };
  const [formData, setFormData] = useState(defaultValues);

  const { email, password } = formData;

  // handle form submit
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(formData);
      alert("Authentication part is under construction");
    },
    [formData]
  );

  const handleChange = (e) => {
    let val = e.target.value;
    setFormData({ ...formData, [e.target.name]: val });
  };

  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit}>
        <Heading title="Login Form" small />
        <Input
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <Input
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <div className={styles.form_footer}>
          <Button type="submit" label="Login" small />
          <div>
            Don'have an account?
            <Link to="/signup">Create</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
