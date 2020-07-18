import React,{useState,useEffect} from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import axios from "axios";

function Tables() {
  const marginTop = {
    marginTop: "10px",
  };
  const [details,setDetails]=useState([])

  useEffect(()=>{

      axios.get("http://localhost:8080/findDetails")
      .then(res=>{
          console.log(res)
          setDetails(res.data )
      })
      .catch(
        err => console.log(err)
      )
  })

  return (
    <Col lg={8} style={marginTop}>
      <Jumbotron className="bg-dark text-white" id="Jumbo">
        <h2>Database</h2>
      </Jumbotron>
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Class</th>
            <th>Division</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody >
            {details.map((details) => (
                <tr key={details.rollno}>
                    <td>{details.name}</td>
                    <td>{details.dob}</td>
                    <td>{details.clas}</td>
                    <td>{details.div}</td>
                    <td>{details.gender}</td>
                </tr>
            ))}
        </tbody>
      </Table>
    </Col>
  );
}
export default Tables;
