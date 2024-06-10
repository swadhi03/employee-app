import React, { useState } from 'react'
import Navbar from './Navbar'

const AddEmployee = () => {
    const [data,changeData] =useState(
        {
            "id" :"",
            "name" :"",
            "department" :"",
            "phoneno" :"",
            "email" :"",
            "dob" :"",
            "address" :""
        })
        const inputHandler=(event)=>{
            changeData({...data,[event.target.name]:event.target.value})
        }
        const readValue=()=>{
            console.log(data)
        }
  return (
    <div>
        <div className="container">
            <Navbar/>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 colxl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Id</label>
                            <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 colxl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 colxl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Department</label>
                            <select name="department" id="" className="form-control" value={data.department} onChange={inputHandler}>
                                <option value=""></option>
                                <option value="CS">CS</option>
                                <option value="HR">HR</option>
                                <option value="Manager">Manager</option> 
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 colxl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone No</label>
                            <input type="text" className="form-control" name='phoneno' value={data.phoneno} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 colxl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email-Id</label>
                            <input type="email" name="email" id="" className="form-control" value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 colxl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DOB</label>
                            <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Address</label>
                            <textarea name="address" id="" className="form-control" value={data.address} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 colxl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee