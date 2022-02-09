import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { enterEmail, enterFirstName, enterLastName, enterPhone } from '../rootSlice';
import '../App.css';

export const ContactForm1 = () => {
   
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firstName = useSelector(state => state.firstName);
  const lastName = useSelector(state => state.firstName);
  const email = useSelector(state => state.email);
  const phone = useSelector(state => state.phone);
  const { register, handleSubmit } = useForm({defaultValues: {firstName, lastName, email, phone}});

  const onSubmit = (data) => {
    dispatch(enterFirstName(data.firstName))
    dispatch(enterLastName(data.lastName))
    dispatch(enterEmail(data.email))
    dispatch(enterPhone(data.phone))
    navigate('/form-2')
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

              <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                  <input
                    id="firstName"
                    type='text'
                    {...register('firstName', { required: true })}
                    placeholder='First name:'
                    name='firstName'
                    className='form-control'
                  />
                </div>

                <div className='form-group'>
                  <input
                  id="lastName"
                    type='text'
                    {...register('lastName', { required: true })}
                    placeholder='Last name:'
                    name='lastName'
                    className='form-control'
                  />
                </div>

                <div className='form-group'>
                  <input
                  id="email"
                    type='email'
                    {...register('email', { required: true })}
                    placeholder='Email'
                    name='email'
                    className='form-control'
                  />
                  </div>

                <div className='form-group'>
                  <input
                    id="phone"
                    type='text'
                    {...register('phone', { required: true })}
                    placeholder='Phone'
                    name='phone'
                    className='form-control'
                  />
                  </div>

                  <div>
                  <input type="submit" className="btn btn-outline-warning btn-block mt-4 cl" value="Next">
                  </input>
                </div>

                
        
              </form>
          </div>
          </div>
        </div>
      </div>
        );
    }