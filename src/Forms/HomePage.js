import axios from "axios"
import { useEffect, useState } from "react"
import react from "react"
import { Link, useHistory } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
// import {useEffect} from "react-router-dom"
import EditIcon from '@material-ui/icons/Edit';
import HomeIcon from '@material-ui/icons/Home';
const HomePage = () =>
{

    let history = useHistory()

    const[state,setState] = useState([])

    useEffect(()=>{
        fetchEmp()
    },[])



    const fetchEmp = async()=>
    {
        const success = await axios.get(`http://localhost:3000/Employee/`)
        console.log(success);
        setState(success.data.reverse())
    }


    const deleteEmp = async id => {
        await axios.delete(`http://localhost:3000/Employee/${id}`);
        alert("Deleted Successfully")
        fetchEmp();
        history.push("./Forms/HomePage")
      };
    

return(<div className="container">
<div className="py-4">
  <h1>Home Page</h1>
  <table class="table table-striped table-dark table-hover table-lg table-primary">
    <thead className="table-primary">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">User Name</th>
        <th scope="col">Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {state.length === 0 ? <p>Sorry No Data To Show</p> :  (state.map((emp, index) => (
        <tr key={emp.id}>
          <th scope="row">{index + 1}</th>
          <td>{emp.name}</td>
          <td>{emp.username}</td>
          <td>{emp.email}</td>
          <td>
            <Link className="btn btn-outline-secondary mr-2"  to={`/CRUD/View/${emp.id}`}>
              View
            </Link>
            <Link
              className="btn btn-outline-secondary mr-2"
              to={`/CRUD/UpdateEmployee/${emp.id}`}
            >
               <EditIcon></EditIcon>

            </Link>
            <Link to=""
              className="btn btn-danger mr-8"
              onClick={()=>deleteEmp(emp.id)}
            >
               <DeleteIcon></DeleteIcon>
            </Link>
          </td>
        </tr>
      )))}
    
    </tbody>
  </table>
</div>
</div>
);


}

export default HomePage