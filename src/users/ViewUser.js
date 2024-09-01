import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

import { Link, useParams } from 'react-router-dom'


export default function ViewUser() {

  
    const [user,setUser] = useState({
        launch:"",
        albumName:"",
        lyricist:"",
        download:"",
        likes:"",
        duration:""
    })
    const loadUser=async()=>{
      const result = await axios.get(`http://localhost:8080/get/${launch}`)
      setUser(result.data)
    }

    
    const {launch} = useParams()
    useEffect(()=>{
      loadUser()
    },[])

    return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
              <h2 className="text-center m-4">Team Details</h2>

              <div className="card">
                <div className="card-header">
                  Details of team:
                  <ul className="list-group list-group-flush">
                    <li className = "list-group-item">
                      <b>LAUNCH: </b>
                      {user.launch}

                    </li>
                    <li className = "list-group-item">
                      <b>ALBUM NAME: </b>
                      {user.albumName}
                    </li>
                    <li className = "list-group-item">
                      <b>LYRICIST: </b>
                      {user.lyricist}
                    </li>
                    <li className = "list-group-item">
                      <b>DOWNLOAD: </b>
                      {user.download}
                    </li>
                    <li className = "list-group-item ">
                      <b>LIKES: </b>
                      
                      {user.likes}

                    </li>
                    <li className = "list-group-item">
                      <b>Duration: </b>
                      {user.duration}

                      
                    </li>

                  </ul>
                </div>
              </div>
              <Link className="btn btn-primary my-2" to={"/fetchteams"}>
                  Back to Home
              </Link>
            </div>
          </div>
        </div>
    )
}