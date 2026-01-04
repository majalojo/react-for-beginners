import React from "react";

const DOManipulation = () => {
  //1.  using a hook useState then onChange independently
  const [userName, setUserName] = React.useState("");

  function handleUserNameChange(e) {
    setUserName(e.target.value);
  }

  const [password, setPassword] = React.useState("");

  function handlePassChange(e) {
    setPassword(e.target.value);
  }

  //form
  function sendyourCredentials(e) {
    e.preventDefault();
    console.log(
      `The user is successfully logged in with its: ${userName} and ${password}`
    );
  }

  //2.  using onChange inside a form
  const [formData, setFormData] = React.useState({ username: "", pass: "" });
  //form
  function sendCredentials(e) {
    e.preventDefault();
    console.log(formData);
  }

  //3. native DOM manipulation
  function nativeDomanipulation(e) {
    e.preventDefault();
    const secondFormData = new FormData(e.currentTarget);
    const user = secondFormData.get("user");
    const pass = secondFormData.get("usersPass");
    console.log(user, pass);
  }

  return (
    <div>
      <h1>Three ways of manipulating data inside form</h1>
      <ul>
        <li>1. using a hook useState then onChange independently</li>
        <li>2. using onChange inside a form</li>
        <li>3. native DOM manipulation</li>
      </ul>

      <hr />
      <div>
        <form onSubmit={sendyourCredentials}>
          <input
            onChange={handleUserNameChange}
            type="text"
            placeholder="Your username"
          />
          <input
            onChange={handlePassChange}
            type="password"
            placeholder="Your secured password"
          />
          <button type="submit">Send your credentials</button>
        </form>
      </div>

      <div>
        <form onSubmit={sendCredentials}>
          <input
            value={formData.username}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, username: e.target.value }))
            }
            type="text"
            placeholder="Your Username"
          />
          <input
            value={formData.pass}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, pass: e.target.value }))
            }
            type="password"
            placeholder="Your Secured Password"
          />
          <button type="submit">Send credentials</button>
        </form>
      </div>

      <div>
        <form onSubmit={nativeDomanipulation}>
          <input name="user" type="text" placeholder="username" />
          <input name="usersPass" type="password" placeholder="password" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default DOManipulation;
