import MainComp from '../maincomp';
import './login.css';
import React from 'react';
import '../signup_page/signup.css';


const Loginpage = () => {
    
    return (
        <>
            <MainComp children={
                <>
                    <div className="signupdiv">
                        <h1>LOGIN</h1>
                            <form action={'#'} className='formdiv_cstm'> 
                                <p>Username or Email Id</p>
                                <input type="text" placeholder="Username" />
                                <p>Password</p>
                                <input type="password" placeholder="Password" />
                                <button type="submit">Login</button>
                            </form>
                    </div>
                </>    
            }/>
        </>
    )
}

export default Loginpage;