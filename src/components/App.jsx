import React, { useState } from "react";

function App() {
  const [HeadingText, setHeadingText] = useState("Student Information");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleclick() {
    setHeadingText("Submitted");
  }
  function handleMouseOver() {
    setMouseOver(true);
  }

  return (
    <div className="container">
      <h1>{HeadingText}</h1>
      <input className="box" type="text" placeholder="What's your name?" />
      <input className="box" type="text" placeholder="Date of Birth" />
      <select id="dropdown" required>
        <option value="" disabled selected hidden>
          Class
        </option>
        <option value="I">I</option>
        <option value="II">II</option>
        <option value="III">III</option>
        <option value="IV">IV</option>
        <option value="V">V</option>
        <option value="VI">VI</option>
        <option value="VII">VII</option>
        <option value="VIII">VIII</option>
        <option value="IX">IX</option>
        <option value="X">X</option>
        <option value="XI">XI</option>
        <option value="XII">XII</option>
      </select>
      <select id="dropdown" required>
        <option value="" disabled selected hidden>
          Division
        </option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <div className="radio">
        <label className="radio" htmlFor="Gender">
          Gender{" "}
        </label>
        <input type="radio" value="MALE" name="gender" />
        <label className="radio" htmlFor="Male">
          Male{" "}
        </label>
        <input type="radio" value="FEMALE" name="gender" />
        <label className="radio" htmlFor="Female">
          Female{" "}
        </label>
      </div>

      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleclick}
        onMouseOver={handleMouseOver}
      >
        Submit
      </button>
    </div>
  );
}

export default App;