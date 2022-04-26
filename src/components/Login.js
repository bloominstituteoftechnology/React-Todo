import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import '../styles/Login.css';
import { connect } from 'react-redux';
import { login, clearLoginError } from "../actions/userActions";
import { useNavigate } from 'react-router-dom';

function Login({login, clearLoginError, loginError}) {
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
    setTimeout(go,2000) // to allow time for the token to be set 
  };

  const go = () => {
    navigate(`/user/todos`)
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
            <div className="username-error">
                {errors.user_name.length > 0 ? (
                    <p className="username-error-p">{errors.user_name}</p>
                ) : null}
            </div >

            {loginError ? (
                <div className='login-error'>
                    <div className='login-error-inner'>
                        <p className="login-error-text">{loginError}</p>
                    <button 
                    className='close-login-error'
                    onClick={() => clearLoginError()}>X</button>  
                    </div>
                </div> 
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
            <div className="password-error">
                {errors.password.length > 0 ? (
                    <p className="password-error-p">{errors.password}</p>
                ) : null}
            </div>
            <div className='button-div'>
               <button disabled={buttonDisabled}>Login</button> 
            </div>
        </form>
      </div>
  );
}

const mapStateToProps = state => {
    return {
        loginError : state.userReducer.loginError
    }
}

export default connect( mapStateToProps, { login, clearLoginError } )( Login )
