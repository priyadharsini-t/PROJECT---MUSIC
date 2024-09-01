import React, { useEffect, useState } from 'react'
import axios from"axios";
import { Link, useParams } from 'react-router-dom';


export default function Home() {

    const [user,setUser]=useState([])

    useEffect(()=>
    {
        loadUsers(); 
    },[]);
    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/fetchteams");
        setUser(result.data);
    };


const {id} =useParams()

    const deleteTeam = async(launch)=>{
       await axios.delete(`http://localhost:8080/deleteteams/${launch}`)
      loadUsers()
  }

  return (
      <div className='container'>
     
      

                <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/"}>TOP HIT SONGS</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link className="btn btn-outline-light" to = "/postteams">ADD SONGS</Link>
            </div>
          </nav>
          </div>
              <div className='py-4'>
              <table className="table border dark shadow">
            <thead>
              <tr>
                <th scope="col">launch</th>
                <th scope="col">albumName</th>
                <th scope="col">lyricist</th>
                <th scope="col">download</th>
                <th scope="col">likes</th>
                <th scope="col">duration</th>
                <th scope="col">operations</th>
              </tr>
            </thead>
            <tbody>
              {
                  user.map((user,index)=>(
                      <tr>
                {/* <th scope="row" key={index}>{index+1}</th> */}
                <td>{user.launch}</td>
                <td>{user.albumName}</td>
                <td>{user.lyricist}</td>
                <td>{user.download}</td>
                <td>{user.likes}</td>
                <td>{user.duration}</td>
                <td>
                  <Link className="btn btn-success mx-2" to={`/get/${user.launch}`}>VIEW</Link>
                  <Link className="btn btn-primary mx-2" to={`/updateteams/`}>EDIT</Link>
                  <button className="btn btn-danger mx-2" onClick={()=>deleteTeam(user.launch)}>DELETE</button>
                  

                </td>
              </tr>
              
                  ))
              }
            </tbody>
        {/* <Link to={"/mainpage"} className="btn btn-primary mx-2"> E X P L O R E</Link> */}
          </table>
              </div>
    </div>
  )
};