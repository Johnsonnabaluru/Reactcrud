import axios from 'axios';
import React, { useState, useEffect } from 'react';
import style from "./home.module.css"
import { Link } from 'react-router-dom';

const Users = () => {
  let [content, setContent] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/Employees")
      .then((response) => {
        console.log(response.data);
        setContent(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []); // Empty dependency array means this effect runs only once

  let deleteData=(id)=>{
    axios.delete(`http://localhost:3000/Employees/${id}`)
    window.location.assign("/user")
  }

  return (
    <div id={style.userpage}>
      {content.map((x) => {
        return(
          <div>
            <table>
             
                <tr >
                  <th colspan={2}>EMPLOYEE {x.id}</th>
                </tr>
            
          
                <tr>
                  <td>NAME:</td>
                  <td>{x.name}</td>
                </tr>

                <tr>
                  <td>SALARY:</td>
                  <td>{x.salary}</td>
                </tr>

                <tr>
                  <td>COMPANY:</td>
                  <td>{x.company}</td>
                </tr>

            
                <div>
                  <Link to={`/edituser/${x.id}`}>Edit </Link>
                  <button onClick={()=>{deleteData(x.id)}}>Delete</button>
                </div>
                
                  
              
        
            </table>
          </div>
        )
      })}
    </div>
  );
};

export default Users;
