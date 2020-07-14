import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function App() {
  const [isMousedOver, setMouseOver] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const [issubmitted, setname] = useState("Student Information");

  const onSubmit = data => {
    console.log(data);
    changename();
    axios
    .post('https://jsonplaceholder.typicode.com/posts',data)
    .then(response => {console.log(response)})
    .catch(error => console.log(error))

  };

  function changename() {
    setname("Submitted");
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <h1>{issubmitted}</h1>
      <label className="radio" htmlFor="Name">
        Name{" "}
      </label>
      <input
        className="box"
        type="text"
        placeholder="What's your name?"
        name="Name"
        ref={register({ required:true  })}
        pattern="[A-Za-z]{3,50}"
      />
      {errors.Name && <p>Your response is required</p>}
      <label className="radio" htmlFor="Date of Birth">
        Date of Birth{" "}
      </label>
      <input
        className="box"
        type="date"
        placeholder="Date of Birth"
        name="DateofBirth"
        ref={register({ required: true })}
      />
      {errors.DateofBirth && <p>Your response is required</p>}
      <label className="radio" htmlFor="Class">
        Class{" "}
      </label>
      <select id="dropdown" ref={register} name="Class" required>
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
      <label className="radio" htmlFor="Division">
        Division{" "}
      </label>
      <select id="dropdown" ref={register} name="Division" required>
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
        <input
          type="radio"
          value="MALE"
          ref={register({ required: true })}
          name="gender"
        />

        <label className="radio" htmlFor="Male">
          Male{" "}
        </label>
        <input
          type="radio"
          value="FEMALE"
          ref={register({ required: true })}
          name="gender"
        />
        {errors.gender && <p>Your response is required</p>}

        <label className="radio" htmlFor="Female">
          Female{" "}
        </label>
      </div>

      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default App;