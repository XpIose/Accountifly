import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom'; 

const Signup = () => {
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
                Signup
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
                        <input type='text' placeholder='Name'/>
                        <input type='text' placeholder='Email'/>
                        <input type='password' placeholder='Password'/>
                        <input type='password' placeholder='Retype Password'/>
                        <button type='submit' style={{width: '50%', marginLeft: 'auto', marginRight: 'auto'}}>Submit</button>
                    {/* </div> */}
                </forum>
                <div style={{textAlign: 'center', cursor: 'pointer'}}
                    >
                    Have an account? <Link to='/'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;