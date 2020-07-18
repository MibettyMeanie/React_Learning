import React from "react";
import { useForm } from "react-hook-form";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";



function Forms(){

const marginTop = {
    marginTop: "10px"
  };

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
    axios
      .post("http://localhost:8080/addDetails", data)
      .then(response => {
        console.log(response);
       
      })
      .catch(error => console.log(error));

  };

return(
    <Col lg={4} style={marginTop}>
    <Jumbotron className="bg-dark text-white" id="Jumbo">
      <h2>Form</h2>
    </Jumbotron>
    <Jumbotron className="bg-dark text-white" id="Jumbo">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row} controlId="name">
          <Form.Label column sm={4}>
            Name
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              name="name"
              type="text"
              placeholder="What is your name?"
              ref={register({ required: true })}
              required
              pattern="[A-Za-z]{3,50}"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="dob">
          <Form.Label column sm={4}>
            Date of Birth
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              name="dob"
              type="date"
              placeholder="date of birth"
              ref={register({ required: true })}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="clas">
          <Form.Label column sm={4}>
            Class
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              as="select"
              name="clas"
              required
              ref={register({ required: true })}
            >
              <option value="" disabled selected hidden>
                Class
              </option>
              <option>I</option>
              <option>II</option>
              <option>III</option>
              <option>IV</option>
              <option>V</option>
              <option>VI</option>
              <option>VII</option>
              <option>VIII</option>
              <option>IX</option>
              <option>X</option>
              <option>XI</option>
              <option>XII</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="div">
          <Form.Label column sm={4}>
            Class
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              as="select"
              name="div"
              required
              ref={register({ required: true })}
            >
              <option value="" disabled selected hidden>
                Division
              </option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={4}>
              Gender
            </Form.Label>
            <Col sm={8}>
              <Form.Check
                inline
                ref={register({ required: true })}
                required
                type="radio"
                label="Male"
                name="gender"
                value="Male"
                id={`inline-${"radio"}-1`}
              />
              <Form.Check
                inline
                ref={register({ required: true })}
                required
                type="radio"
                label="Female"
                name="gender"
                value="Female"
                id={`inline-${"radio"}-2`}
              />
              {errors.gender && <p>Your response is required</p>}
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" class="btn btn-light">
              Submit
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Jumbotron>
  </Col>
);
}
export default Forms;