import { useState} from "react";
import React from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"
import "C:/Users/my pc/Desktop/React/FAIZ_WORK/Faiz-React/mp/node_modules/bootstrap/dist/css/bootstrap.css"
import {Button } from "@material-ui/core"
import PersonAddIcon from '@material-ui/icons/PersonAdd';
const AddEmployee = () =>
{

    let history = useHistory();

    const [emp,setEmp] = useState({
       
      //  id: "",
        name: "",
        username: "",
        password:"",
        email: "",
        phone :"",
        address:"",
        emailError:"",
        nameError:"",
        passwordError:"",
        phoneError:""
    })

    const{id,name,username,password,email,phone,address,emailError,nameError,passwordError,phoneError} = emp

    const changeHand =(event) =>{

            setEmp({...emp,[event.target.name]:event.target.value})

        
    }

    //var emailError="";
    const emailVal = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    const mobileVal = !isNaN(phone) && phone.length>10 && phone.length<13
    const nameVal = isNaN(name)

    const submitHand = (event) =>{
        {
            event.preventDefault()
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
            && password.length<10  && isNaN(name) && phone.length<11 && !isNaN(phone))

             {
           
              axios.post(`http://localhost:3000/Employee/`,emp)
              .then((response)=>{
                console.log(response.data);
               
    
    
                alert("Data Inserted Succefully")
                history.push("/Forms/HomePage")

                
              })
            }

                else{

                  
                    emp.emailError = emailVal ? "": "Please enter valid email" ;
                    emp.nameError = isNaN(name)?"" :"Enter Valid Name"
                    emp.phoneError =!isNaN(phone)&& phone.length==10?"":"Enter Valid Phone"
                    setEmp({...emp,[event.target.name]:event.target.value})


                }
           

        }
        
       
    }

return(
    <div className="container bg-light border border-secondary border-5" style={{marginTop:"15px"}}> 
      <div className="w-75 mx-auto shadow p-5">
<br></br>
        <h2 className="text-center bg-white mb-4">Add Employee</h2>
        <form onSubmit={e=>submitHand(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => changeHand(e)}
              required
            />
            <br></br>
            <p style={{color:"red"}}>{nameError}</p>
          
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => changeHand(e)}
              required
            />
            <br></br>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter Your Password"
              name="password"
              value={password}
              onChange={e => changeHand(e)}
              required
            />
          </div>
          <br></br>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={e => changeHand(e)}
              required
            />
            <p style={{color:"red"}}>{emailError}</p>
            <br></br>
          </div>
          <br></br>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => changeHand(e)}
              required
            />
            <br></br>
            <p style={{color:"red"}}>{phoneError}</p>

          </div>
          <br></br>
          <button className="btn btn-secondary btn-lg .text-center"> <PersonAddIcon></PersonAddIcon> Add Employee</button>
        </form>
      </div>
    </div>
  )


}

export default AddEmployee