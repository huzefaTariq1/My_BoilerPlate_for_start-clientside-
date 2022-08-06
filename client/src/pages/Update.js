import React from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Update = () => {
    let { id } = useParams();
    let navigate = useNavigate();


    const handleUpdate=()=>{
        navigate(`/`)
      }

  return (
    <>
       <div>Update id {id}</div>
        <button onClick={handleUpdate}>Back To Home</button>
    </>
 
  )
}

export default Update