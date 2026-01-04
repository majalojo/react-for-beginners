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

  //3. native DOM manipulation --> UNCONTROLLED
  function nativeDomanipulation(e) {
    e.preventDefault();
    const secondFormData = new FormData(e.currentTarget); //form is a parent element and it will listen what's happening with its children elements-inputs and a button
    const user = secondFormData.get("user");
    const pass = secondFormData.get("usersPass");
    console.log(user, pass);
  }

  //4. React v19

  function reactv19(thirdFormData){
    const user_name = thirdFormData.get("user_name");
    const user_password = thirdFormData.get("user_password");
    console.log(user_name, user_password);

  }


  //IMPORTANT!!
  /**
   * currentTarget vs target
   * currentTarget refers to a first parent element which will listen for event on a child element
   * target referes to an element which triggers the event (target.value reads value of an element)
   */

  return (
    <div>
      <h1>Three ways of manipulating data inside form</h1>
      <ul>
        <li>1. using a hook useState then onChange independently</li>
        <li>2. using onChange inside a form</li>
        <li>3. native DOM manipulation</li>
        <li>React v19</li>
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
          <button type="submit">Send</button>
        </form>
      </div>

      <div>
        <form action={reactv19}>
          <input name="user_name" type="text" placeholder="Users username" />
          <input name="user_password" type="password" placeholder="Users password" />
          <button type="submit">New React v19</button>
        </form>
      </div>

    </div>
  );
};

export default DOManipulation;
