import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteUser, GetAllUser } from '../Slices/UserSlice';
import { Link } from 'react-router-dom';
export default function ViewList()
{
    const {users,loading,error}=useSelector((state)=>state.User)
    const dispatch=useDispatch();
    useEffect(()=>{
    dispatch(GetAllUser());
    },[])
    if(loading)
    {
        return <div>loading...</div>
    }
    if(error!=null)
    {
        return <div>{error}</div>
    }
    return(
        <>
        <div className="container">
            <h1 className='text-center text-decoration-underline pt-3'>Simple User Mangement System</h1>
            <Link className='btn btn-primary ' to={"/CreateAndUpdate/c"}>Add User</Link>
            <div className="row justify-content-center p-5">
                <div className="col-md-6">
               <table className='table text-center table-light table-hover table-stripped'>
                <thead>
                    <tr><th>Id</th>
                   <th>Name</th>
                   <th></th>
                   </tr>
                </thead>
                <tbody>
                    {users.map((v)=>
                    <tr key={v._id}>
                    <td>{v._id}</td>
                    <td >{v.name.toUpperCase()}</td>
                    <td>
                        <Link className='btn btn-primary btn-sm m-1' to={`/ViewUser/${v._id}`}>View</Link>
                        <Link className='btn btn-primary btn-sm m-1' to={`/CreateAndUpdate/${v._id}`}>Edit</Link>
                        <Link className='btn btn-primary btn-sm m-1' onClick={()=>dispatch(DeleteUser(v._id))}>Delete</Link>
                    </td>
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