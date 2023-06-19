import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom'; 

const Login = () => {
    // const forumStyle = {
    //     display: 'flex',
    //     flexDirection: 'collumn'
    // };

    return (
        <div style={{
            marginTop: '10ch',
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center',
            gap: '10px'
            }}>

            <div style={{textAlign: 'center'}}>
                Login
            </div>
            <div>
                <forum style={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    // width: '50%',
                    justifyContent: 'center', 
                    alignContent: 'center',
                    gap: '10px'
                }}>
                    {/* <div className='inputs' > */}
                        <input type='text' placeholder='Email'/>
                        <input type='password' placeholder='Password'/>
                        <button type='submit' style={{width: '50%', marginLeft: 'auto', marginRight: 'auto'}}>Submit</button>
                    {/* </div> */}
                </forum>
                <div style={{textAlign: 'center', cursor: 'pointer'}}>
                    Forgot password?
                </div>
                <div style={{textAlign: 'center', cursor: 'pointer'}}
                    >
                    Don't have an account? <Link to='/signup'>Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;