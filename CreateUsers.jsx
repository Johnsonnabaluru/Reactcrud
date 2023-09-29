import React, { useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateUsers = () => {
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
    let navigate=useNavigate()
    let namedata=(e)=>{
      setName(e.target.value)
      // console.log(setName);
    }
    let saldata=(e)=>{
      setSalary(e.target.value)
      // console.log(setSalary);
    }
    let companydata=(e)=>{
      setCompany(e.target.value)
      // console.log(setCompany);
    }

    let formHandle=(e)=>{
      e.preventDefault()
      console.log(name,salary,company);
      let payload={
        name:name,
        salary:salary,
        company:company
      }
      axios.post("http://localhost:3000/Employees",payload)
      .then(()=>{
        console.log("data posted successfully");
      })
      .catch(()=>{
        console.log("something went wrong");
      })
      navigate("/user")
    }
  return (
    <div  id={style.Myform}>
        <form> 
                <p>CREATE-USER</p>
                 <label >Name</label>
                 <input type="text" value={name} onChange={namedata}/>
                  <br />

                 <label >Salary</label>
                 <input type="text" value={salary}  onChange={saldata}/>
                 <br />

                 <label >Company</label>
                 <input type="text" name={company} onChange={companydata}/>
                 <br />
               
                 <button onClick={formHandle}>SUBMIT</button>
        </form>
         
    </div>
  )
}

export default CreateUsers