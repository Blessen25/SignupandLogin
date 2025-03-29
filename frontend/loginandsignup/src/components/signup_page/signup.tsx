import MainComp from '../maincomp';
import './signup.css';
import React from 'react';

const Signuppage = () => {

    return (
        <>
            <MainComp children={
                <>
                    <div className="signupdiv">
                        <h1>SIGNUP</h1>
                            <form action={'#'} className='formdiv_cstm'> 
                                <p>Username</p>
                                <input type="text" placeholder="Username" />
                                <p>Email Id</p>
                                <input type='email' placeholder="Email Id" />
                                <p>Password</p>
                                <input type="password" placeholder="Password" />
                                <p>Confirm Password</p>
                                <input type="password" placeholder="Confirm Password" />
                                <button type="submit">Signup</button>

                            </form>
                    </div>
                </>    
            }/>
        </>
    )
}

export default Signuppage;