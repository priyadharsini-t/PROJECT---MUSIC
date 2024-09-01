import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser() {


    let navigate =useNavigate()

    const [user,setUser] = useState({
        launch:"",
        albumName:"",
        lyricist:"",
        download:"",
        likes:"",
        duration:""
    })


        const onInputChange  =  (e)=>{

            setUser({...user,[e.target.name]:e.target.value})
        }

        const {launch, albumName , lyricist ,download,likes,duration} = user
        const onSubmit= async (e)=>{
            
            e.preventDefault();
            await axios.put("http://localhost:8080/updateteams",user);
            navigate("/")

        }


   
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
          <h2 className="text-center m-4">Add team</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Number" className="form-label">
             Launch 
            </label>
            <input 
            type={"Number"}
            className="form-control border-dark shadow"
            placeholder="Enter Team launch"
            name="launch"
            value={launch}
            onChange={(e)=>onInputChange(e)} >
              
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Album Name
            </label>
            <input 
            type={"text"}
            className="form-control border-dark shadow"
            placeholder="Enter album name"
            name="albumName"
            value={albumName}
            onChange={(e)=>onInputChange(e)}>
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Lyricist
            </label>
            <input 
            type={"text"}
            className="form-control border-dark shadow"
            placeholder="Enter Lyricist"
            name="lyricist"
            value={lyricist}
            onChange={(e)=>onInputChange(e)}>
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Download
            </label>
            <input 
            type={"number"}
            className="form-control border-dark shadow"
            placeholder="Enter no of download"
            name="download"
            value={download}
            onChange={(e)=>onInputChange(e)}>
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Likes
            </label>
            <input 
            type={"number"}
            className="form-control border-dark shadow"
            placeholder="Enter no of likes"
            name="likes"
            value={likes}
            onChange={(e)=>onInputChange(e)}>
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Duration
            </label>
            <input 
            type={"number"}
            className="form-control border-dark shadow"
            placeholder="Enter duration"
            name="duration"
            value={duration}
            onChange={(e)=>onInputChange(e)}>
            </input>
          </div>
          
          <button type="submit" className="btn btn-outline-secondary">Submit</button>
          <Link className="btn btn-outline-danger mx-2" to ="/fetchteams">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
  
}