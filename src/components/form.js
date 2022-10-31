import React from "react";

function Form() {
  return (
    <div className="main">
      <p className="sign" align="center">
        EVEN ODD CHECKER
      </p>
      <form className="form1">
        <input className="username" type="" placeholder="EVEN" />
        <input className="password" type="" placeholder="ODD" />
        <a className="submit" align="center">
          Check
        </a>
        {/* <p className="forgot" align="center">
          <a href="#">Forgot Password? </a>
        </p> */}
      </form>
    </div>
  );
}

export default Form;