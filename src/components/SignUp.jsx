import React, { useEffect, useState } from 'react';


export default function SignUp() {
    const data = { username: "", email: "", password: "", confirmPassword: "" };
    const [iData, setiData] = useState(data);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [flag, setFlag] = useState(false);
  
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
    const handleShowConfirmPassword = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };
  
    function handleSubmit(e) {
      e.preventDefault();
      if (!iData.username || !iData.email || !iData.password || !iData.confirmPassword) {
        alert("All fields should be entered!");
      } else if (password !== confirmPassword) {
        setPasswordsMatch(true);
      } else {
        setPasswordsMatch(false);
        setFlag(true);
      }
      console.log(data);
    }
    useEffect(() => {}, [flag]);
  
    function handleData(e) {
      setiData({ ...iData, [e.target.name]: e.target.value });
      if (e.target.name === "password") {
        setPassword(e.target.value);
      } else if (e.target.name === "confirmPassword") {
        setConfirmPassword(e.target.value);
      }
    }
  
    function handleReset() {
      setiData(data);
      setShowPassword(false);
      setShowConfirmPassword(false);
      setPassword("");
      setConfirmPassword("");
      setPasswordsMatch(false);
      setFlag(false);
    }
  
    return (
      <div className="signUp">
        <pre>{flag ? <h2>Hey {iData.username}, You've Registered successfully!</h2> :""}</pre>
        <form className="container" onSubmit={handleSubmit}>
          <div className="header">
            <h1>
              <u>Registration Form</u>
            </h1>
          </div>
          <div>
            <label>
            Username:{" "}
            </label>
            <input className='input' type="text" placeholder="Enter your Username" name="username" value={iData.username} onChange={handleData} />
          </div>
          <div>
            <label>
              E-mail:{" "}
            </label>
            <input className='input' type="email" placeholder="Enter your E-mail" name="email" value={iData.email} onChange={handleData} />
          </div>
          <div className="password">
            <div>
            <label>
              Password:{" "}
            </label>
              <input className='input' type={showPassword ? "text" : "password"} placeholder="Enter Password" name="password" value={iData.password} onChange={handleData} />
              <button type="button" onClick={handleShowPassword}>
                {showPassword ? "Hide" : "Show"}
              </button>{" "}
              <br />
              {passwordsMatch && <div>Passwords don't match</div>}
            </div>
            <div>
            <label>
              Confirm Password:{" "}
            </label>
              <input className='input' type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" name="confirmPassword" value={iData.confirmPassword} onChange={handleData} />
              <button type="button" onClick={handleShowConfirmPassword}>
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div><hr/>
            <button type="submit">Submit</button>{" "}
            <button type="reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }