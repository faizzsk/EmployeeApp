import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";


const UpdateEmployee =()=>{

    let history = useHistory()

    const{id} = useParams()

    const [emp,setEmp] = useState({
        
        name: "",
        username: "",
        password:"",
        email: "",
        phone :"",
        address:"",
        emailError:"",
        nameError:"",
        phoneError:""

    })

    const{name,username,password,email,phone,phoneError,emailError,nameError} = emp

    const changeHand =(event)=>{

        setEmp({...emp,[event.target.name]:event.target.value})

    }
    useEffect(() => {
        fetchEmp();
      }, []);

      const emailVal = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
 
const updateEmp =async(e)=>{
  e.preventDefault()

   // if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    //&& password.length<10  && isNaN(name) && phone.length==10 && !isNaN(phone))
   {

    let success = axios.put(`http://localhost:3000/Employee/${id}`,emp)
    console.log(success);
    history.push("/Forms/HomePage")
   }

  // else{
      console.log("in Else of erro");
    
    //   emp.emailError = emailVal ?     history.push("/Forms/HomePage")
    //   : "Please enter valid email" ;
    //   emp.nameError = isNaN(name)?""  : "Enter Valid Name"
    //   emp.phoneError =!isNaN(phone) && phone.length==10 ? "":"Enter Valid Phone"
    //  setEmp({...emp,[e.target.name]:e.target.value})

    // e.preventDefault()

   //}

}

const fetchEmp = async()=>
{
        let succes = await axios.get(`http://localhost:3000/Employee/${id}`)
        console.log(succes);
        setEmp(succes.data)
      
}


return(  
 <div className="container bg-light border border-secondary border-5" style={{marginTop:"15px"}}>
<div className="w-75 mx-auto shadow p-5">
  <h2 className="text-center mb-4">Update Employee</h2>
  <form>
    <div className="form-group">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Your Name"
        name="name"
        value={name}
        onChange={e => changeHand(e)}
      />
            <span style={{color:"red"}}>{}</span>
    </div>
    <div className="form-group">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Your Username"
        name="username"
        value={username}
        onChange={e => changeHand(e)}
      />
    </div>
    <div className="form-group">
      <input
        type="password"
        className="form-control form-control-lg"
        placeholder="Enter Your Password"
        name="password"
        value={password}
        onChange={e => changeHand(e)}
      />
    </div>
    <span style={{color:"red"}}>{}</span>

    <div className="form-group">
      <input
        type="email"
        className="form-control form-control-lg"
        placeholder="Enter Your E-mail Address"
        name="email"
        value={email}
        onChange={e => changeHand(e)}
      />
      <br></br>
            <span style={{color:"red"}}>{}</span>

    </div>
    <div className="form-group">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Your Phone Number"
        name="phone"
        value={phone}
        onChange={e => changeHand(e)}
      />
      <br></br>
      <span style={{color:"red"}}>{}</span>
    </div>
    <br></br>
    <button className="btn btn-secondary btn-lg .text-center" onClick ={e=>updateEmp(e)}>Update Employee</button>
  </form>
</div>
</div> 
)



}

export default UpdateEmployee