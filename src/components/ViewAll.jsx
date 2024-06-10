import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data,changeData]=useState([
        {
            "id" :"101",
            "name" :"Jinitha",
            "department" :"CS",
            "phoneno" :"9087676543",
            "email" :"jinitha@gmail.com",
            "dob" :"04/06/2002",
            "address" :"Palakkad"
        }
    ])
    return (
        <div>
            <div className="container">
                <Navbar/>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Index</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Phone_No</th>
                                    <th scope="col">Email_ID</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value,index)=>{
                                        return <tr>
                                        <th scope="row">{index}</th>
                                        <td>{value.id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.department}</td>
                                        <td>{value.phoneno}</td>
                                        <td>{value.email}</td>
                                        <td>{value.dob}</td>
                                        <td>{value.address}</td>
                                    </tr>
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll