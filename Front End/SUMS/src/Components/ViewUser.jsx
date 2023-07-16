import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {  useSelector } from 'react-redux'
export default function ViewUser()
{
    const {users}=useSelector((state)=>state.User)
    const {_id}=useParams();
    const [data,setData]=useState([]);
    useEffect(()=>{
setData(users.filter((v)=>v._id==_id));
    },[])
    console.log(_id);
    return(
        <>
         <div className="container">
            <h1 className='text-center text-decoration-underline pt-3'>Simple User Mangement System</h1>
            <div className="row justify-content-center p-5">
                <div className="col-md-8">
               <table className='table text-center table-light table-hover table-stripped'>
                <thead>
                    <tr><th>Id</th>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Phone No.</th>
                   </tr>
                </thead>
                <tbody>
                    {data.map((v)=>
                    <tr key={v._id}>
                    <td>{v._id}</td>
                    <td >{v.name.toUpperCase()}</td>
                    <td >{v.email}</td>
                    <td >{v.phone}</td>
                    </tr>
                    )}
                </tbody>
               </table>
                </div>
            </div>
        </div>
        </>
    )
}