import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../App.css';

export const AfterSubmit = () => {
   
    const state = useSelector(state => state);

    useEffect(() => {
    axios.post("http://localhost:5000/api/forms", state)
            .then(res => {
                alert("Success")
            }).catch(err => { console.log("Error") })
        }, [])
    return (
            <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="col m-auto">
              <h1 className="display-4 text-center">Thank you for submitting</h1>
          </div>
          <div className="col m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Home
              </Link>
            </div>
            <div className="col m-auto">
              <br />
              <Link to="/form-1" className="btn btn-outline-warning float-left">
                  Submit again
              </Link>
            </div>
          </div>
        </div>
      </div>
        );
    }