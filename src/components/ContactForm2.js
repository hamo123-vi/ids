import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { enterText } from '../rootSlice';
import '../App.css';

export const ContactForm2 = () => {
   
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const text = useSelector(state => state.text);
  const { register, handleSubmit } = useForm({defaultValues: { text }});

  const onSubmit2 = (data) => {
    dispatch(enterText(data.text))
    navigate('/after')
    console.error("Submitted")
  }
  return (
            <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Home
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Contact us</h1>
              <p className="lead text-center">
                  We will message you back soon
              </p>

              <form noValidate onSubmit={handleSubmit(onSubmit2)}>

                <div className='form-group'>
                  <input
                  id="text"
                    type='text'
                    {...register('text')}
                    placeholder='Email'
                    name='text'
                    className='form-control'
                  />
                  </div>

                  <div>
                  <input type="submit" className="btn btn-outline-warning btn-block mt-4 cl" value="Submit">
                  </input>
                </div>

                
        
              </form>
          </div>
          </div>
        </div>
      </div>
        );
    }