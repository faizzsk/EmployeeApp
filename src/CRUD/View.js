import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ViewAgenda } from "@material-ui/icons";



const View =()=>{

   //let history = useHistory();

    const [emp,setEmp] = useState({
       
      //  id: "",
        name: "",
        username: "",
        password:"",
        email: "",
        phone :"",
        address:"",
})

const { id } = useParams();
  useEffect(() => {
    fetchEmp();
  }, []);
  
  const fetchEmp = async () => {
    const successs = await axios.get(`http://localhost:3000/Employee/${id}`);
    setEmp(successs.data);
  };

  return (
    <div className="container py-4 border border-secondary border-5" style={{marginTop:"15px"}}>
      <h1 className="display-4">Employee Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {emp.name}</li>
        <li className="list-group-item">user name: {emp.username}</li>
        <li className="list-group-item">email: {emp.email}</li>
        <li className="list-group-item">phone: {emp.phone}</li>
        <li className="list-group-item">address: {emp.address}</li>

      </ul>
<br></br>
      <Link className="btn btn-secondary btn-lg" to="/Forms/HomePage">
        Back to Home
      </Link>
    
    </div>
  );
}

export default View