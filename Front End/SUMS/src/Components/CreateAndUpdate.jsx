import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { AddUser, UpdateUser } from '../Slices/UserSlice';
export default function CreateAndUpdate()
{
    const navigate=useNavigate();
   const dispatch=useDispatch()
    const {users}=useSelector((state)=>state.User)
    const {_id}=useParams();
    const [change,setChange]=useState(false);
    const [data,setData]=useState({
        name:"",
        email:"",
        phone:""
    });
    useEffect(()=>{
    if(_id!=="c"){
        if(users.filter((v)=>v._id===_id)){
            setData(users.find((v)=>v._id===_id))
        }
    setChange(false);
}
    else setChange(true)
   },[]) ;
   function handlesubmit(e)
   {
    e.preventDefault();
    if(_id=="c")
     dispatch(AddUser(data));
     else
     dispatch(UpdateUser({data,_id}))
     navigate('/');
   }
   function handle(e)
   {
    setData({...data,[e.target.name]:e.target.value});
   }

    return(
        <>
         <div className="container">
            <h1 className='text-center text-decoration-underline pt-3'>Simple User Mangement System</h1>
           
            <div className="row justify-content-center p-5">
                <div className="col-md-6">
              <form onSubmit={handlesubmit}>
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" id='name' className="form-control" onChange={handle} name="name" value={data.name} />
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="text" id="email"  className="form-control" onChange={handle} name="email" value={data.email}  />
                <label htmlFor="phone" className="form-label">Phone No:</label>
                <input type="text" id="phone"  className="form-control" onChange={handle} name="phone" value={data.phone} />
                <button type='submit' className='btn btn-primary mt-1'>{change?"Create":"Update"}</button>
              </form>
                </div>
            </div>
        </div>
        </>
    )
}