import React from "react";

function Register() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

git 
  return (
    <div>
      Register
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="Name"
          placeholder="Name"
          onChange={nameChangeHandler}
        />
        <input
          type="email"
          className="email"
          placeholder="Email Address"
          onChange={emailChangeHandler}
        />
        <input
          type="password"
          className="password"
          placeholder="Password"
          onChange={passwordChangeHandler}
        />
        <div className="loginButton">
          <p>
            Already have an account?
            <span>
              <a href="/Login">Sign in</a>
            </span>
          </p>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
