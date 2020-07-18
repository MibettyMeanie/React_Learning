import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import Forms from "./Form";
import Tables from "./Table";

function App() {
  const marginTop = {
    marginTop: "10px",
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <Col lg={12} style={marginTop}>
            <Jumbotron id="Jumbo">
              <h1>Student Information</h1>
            </Jumbotron>
          </Col>
        </div>
      </div>
      <div className="row">
        <Forms/>
        <Tables/>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";

// function App() {
//   const [isMousedOver, setMouseOver] = useState(false);
//   const { register, handleSubmit, errors } = useForm();
//   const [issubmitted, setname] = useState("Student Information");

//   const onSubmit = data => {
//     console.log(data);
//     changename();
//     axios
//     .post('http://localhost:8080/addDetails',data)
//     .then(response => {console.log(response)})
//     .catch(error => console.log(error))

//   };

//   function changename() {
//     setname("Submitted");
//   }
//   function handleMouseOver() {
//     setMouseOver(true);
//   }
//   function handleMouseOut() {
//     setMouseOver(false);
//   }

//   return (
//     <form className="container" onSubmit={handleSubmit(onSubmit)}>
//       <h1>{issubmitted}</h1>
//       <label className="radio" htmlFor="Name">
//         Name{" "}
//       </label>
//       <input
//         className="box"
//         type="text"
//         placeholder="What's your name?"
//         name="name"
//         ref={register({ required:true  })}
//         pattern="[A-Za-z]{3,50}"
//       />
//       {errors.Name && <p>Your response is required</p>}
//       <label className="radio" htmlFor="Date of Birth">
//         Date of Birth{" "}
//       </label>
//       <input
//         className="box"
//         type="date"
//         placeholder="Date of Birth"
//         name="dob"
//         ref={register({ required: true })}
//       />
//       {errors.DateofBirth && <p>Your response is required</p>}
//       <label className="radio" htmlFor="Class">
//         Class{" "}
//       </label>
//       <select id="dropdown" ref={register} name="clas" required>
//         <option value="" disabled selected hidden>
//           Class
//         </option>
//         <option value="I">I</option>
//         <option value="II">II</option>
//         <option value="III">III</option>
//         <option value="IV">IV</option>
//         <option value="V">V</option>
//         <option value="VI">VI</option>
//         <option value="VII">VII</option>
//         <option value="VIII">VIII</option>
//         <option value="IX">IX</option>
//         <option value="X">X</option>
//         <option value="XI">XI</option>
//         <option value="XII">XII</option>
//       </select>
//       <label className="radio" htmlFor="Division">
//         Division{" "}
//       </label>
//       <select id="dropdown" ref={register} name="div" required>
//         <option value="" disabled selected hidden>
//           Division
//         </option>
//         <option value="A">A</option>
//         <option value="B">B</option>
//         <option value="C">C</option>
//       </select>
//       <div className="radio">
//         <label className="radio" htmlFor="Gender">
//           Gender{" "}
//         </label>
//         <input
//           type="radio"
//           value="MALE"
//           ref={register({ required: true })}
//           name="gender"
//         />

//         <label className="radio" htmlFor="Male">
//           Male{" "}
//         </label>
//         <input
//           type="radio"
//           value="FEMALE"
//           ref={register({ required: true })}
//           name="gender"
//         />
//         {errors.gender && <p>Your response is required</p>}

//         <label className="radio" htmlFor="Female">
//           Female{" "}
//         </label>
//       </div>

//       <button
//         style={{ backgroundColor: isMousedOver ? "black" : "white" }}
//         onMouseOver={handleMouseOver}
//         onMouseOut={handleMouseOut}
//         type="submit"
//       >
//         Submit
//       </button>
//     </form>
//   );
// }

export default App;
