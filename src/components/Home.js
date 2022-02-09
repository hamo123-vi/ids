import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Home = () => {

return(
<div className="row">
    <div className="col-12">
    <br />
    
    <div className="main-content">
            <div className="container-fluid">
                <h2 className="home-message text-center">Dear user of internet, we want to say welcome and we hope you will enjoy using our product!</h2>
                <div className='text-center'>
                    <Link to="/form-1" className="btn btn-outline-warning cl">
                        Contact us
                    </Link>
                </div>
            </div>
          </div>
    
    </div>
</div>
)}

export default Home