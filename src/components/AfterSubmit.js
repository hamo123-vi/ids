import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../App.css';

export const AfterSubmit = () => {
   
    const state = useSelector(state => state)

    let fileArray = Array.from(state.cv)

    var formData = new FormData();
     formData.append("cv", fileArray[0]);
     formData.append("firstName", state.firstName);
     formData.append("lastName", state.lastName);
     formData.append("email", state.email);
     formData.append("phone", state.phone);
     formData.append("text", state.text);
    useEffect(() => {
    axios.post("http://localhost:5000/api/forms", formData, { headers: {
      'Content-Type': 'multipart/form-data'
    }})
            .then(res => {
                alert("Success")
            }).catch(err => { console.log("Error") })
        }, [])
    return (
            <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-12 m-auto">
              <h1 className="display-4 text-center">Thank you for submitting</h1>
          </div>
          <div className="col-12 m-auto text-center">
              <br />
              <Link to="/" className="btn btn-outline-warning">
                  Home
              </Link>
            </div>
            <div className="col-12 m-auto text-center">
              <br />
              <Link to="/form-1" className="btn btn-outline-warning">
                  Submit again
              </Link>
            </div>
          </div>
        </div>
      </div>
        );
    }