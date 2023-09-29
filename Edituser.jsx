import React, { useState } from 'react'
import style from "./home.module.css"
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edituser = () => {
  // let {id}=useParams()
  let obj=useParams()
  let [name,setName]=useState("")
  let [salary,setSalary]=useState("")
  let [company,setCompany]=useState("")
  let navigate=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:3000/Employees/${obj.id}`)
        .then((response)=>{
            // console.log(response.data);
            setName(response.data.name)
            setSalary(response.data.salary)
            setCompany(response.data.company)
        })
        .catch(()=>{
            console.log("ERROR:couldn't connect ");
        })
    },[])

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

    let formHandle=()=>{
      let payload={
        name:name,
        company:company,
        salary:salary
      }
      axios.put(`http://localhost:3000/Employees/${obj.id}`,payload)
      .then(()=>{
        console.log("succussfully updated");
      })
      .catch(()=>{
        console.log("error");
      })
      navigate("/user")
    }
  return (
    <div  id={style.Myform}>
        
    <form>
            <p>EDIT-USERS</p>
             <label >Name</label>
             <input type="text" value={name} onChange={namedata}/>
              <br />

             <label >Salary</label>
             <input type="text" value={salary} onChange={saldata}/>
             <br />

             <label >Company</label>
             <input type="text" value={company} onChange={companydata }/>
             <br />
           
             <button onClick={formHandle}>SUBMIT</button>
    </form>
     
</div>
  )
}

export default Edituser