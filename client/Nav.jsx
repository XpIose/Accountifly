import React, { useState } from 'react';
// import { Link, Route, Routes, useNavigate } from 'react-router-dom'; 


const Nav = () => {

    const handleLogedIn = () => {
        return (
            <div className='nav-user'>
                <div>
                    login
                </div>
                <div>
                    signup
                </div>
            </div>
        )
    }
    return (
        <>
            <div className='navbar'>
                <div className='nav-main'>
                    <div>
                        home
                    </div>
                    <div>
                        friends
                    </div>
                </div>
            <div >
                    {handleLogedIn()}   
            </div>
            </div>
        </>
    );
};

export default Nav;