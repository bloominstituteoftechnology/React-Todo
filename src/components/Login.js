import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import '../styles/Login.css';
import { connect } from 'react-redux';
import { login } from "../actions/userActions";
import { useNavigate } from 'react-router-dom';


function Login({login}) {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        user_name: "",
        password: ""
    })

    const [errors, setErrors] = useState({

        user_name: '',
        password: '',

    });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const formSchema = yup.object().shape({
    user_name: yup
      .string()
      .required('Username required')
      .min(3, 'Username must be at least 3 characters long'),
    password: yup
      .string()
      .required('Password required')
      .min(6, 'Password must be at least 6 characters long'),
  });

  useEffect(() => {
    formSchema.isValid(user).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formSchema,user]);

  const validate = e => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: '',
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.message,
        });
      });
  };

  const textBoxChanges = e => {
    e.persist();
    validate(e);

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmit = e => {
    e.preventDefault();
    login(user, setUser)
    setTimeout(go,1000) // to allow time for the token to be set 
  };

  const go = () => {
    navigate('/user/todos')
  }

  return (
      <div className='login-outer-div'>
         <form 
            onSubmit={formSubmit} 
            className="form-container"
            autoComplete='off'>
            <h2>Login</h2>
            <label htmlFor="user_name">Username<br />
            <input
                name="user_name"
                id="user_name"
                type="text"
                onChange={textBoxChanges}
                value={user.user_name}
                placeholder="At least 3 characters long" 
            />
            </label><br />
            {errors.user_name.length > 0 ? (
                <p className="error">{errors.user_name}</p>
            ) : null}

            <label htmlFor="password">Password<br />
                <input
                    name="password"
                    id="password"
                    type="password"
                    onChange={textBoxChanges}
                    value={user.password}
                    placeholder="At least 6 characters long" 
                />
            </label><br />
            {errors.password.length > 0 ? (
                <p className="error">{errors.password}</p>
            ) : null}
            <div className='button-div'>
               <button disabled={buttonDisabled}>Login</button> 
            </div>
            
        </form>
      </div>
  );
}

export default connect( null, { login } )( Login )
