import React, { useState, useEffect } from 'react';
import { createUser } from "../actions/userActions";
import { connect } from "react-redux";
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

function Signup ({createUser}) {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        user_name: "",
        password: ""
    })

    const [errors, setErrors] = useState({
  
        user_name: '',
        password: '',
  
    });

    console.log(errors)
  
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
            console.log(err.message);
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
    }

    const formSubmit = e => {
        e.preventDefault();
        createUser(user, setUser);
        setTimeout(go, 1000);
    }

    const go = () => {
        navigate('/user/todos')
    }

        return (
        <div className='signup-outer-div'>
            <form 
                onSubmit={formSubmit}
                className="form-container"
                autoComplete='off'>
                <h2>Sign up</h2>
                <label htmlFor="user_name">Username<br/>
                    <input 
                        name="user_name" 
                        value={user.user_name} 
                        onChange={textBoxChanges}
                        placeholder="At least 3 characters long" 
                    />
                </label><br />

                {errors.user_name.length > 0 ? (
                    <p className="error">{errors.user_name}</p>
                ) : null}    

                <label htmlFor="password">Password<br/>
                    <input 
                        name="password" 
                        type="password" 
                        value={user.password} 
                        onChange={textBoxChanges} 
                        placeholder="At least 6 characters long" 
                    />
                </label><br /> 

                {errors.password.length > 0 ? (
                    <p className="error">{errors.password}</p>
                ) : null}

                <div className='button-div'>
                    <button disabled={buttonDisabled}>Signup</button> 
                </div>
            </form>
        </div>
    )
}

export default connect( null, { createUser } )(Signup)