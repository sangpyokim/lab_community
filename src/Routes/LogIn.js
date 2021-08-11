import axios from 'axios';
import React, { useState } from 'react'

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const onChange = (e) => {
        const {target: { name, value}} = e;
        if( name === "email" ) {
            setEmail(value)
        } else {
            setPwd(value)
        }
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }
    

    return(
        <div>
            <form onSubmit={onSubmit} >
                <input 
                    name= "email"
                    type="text" 
                    placeholder="Email" 
                    value={email} 
                    onChange={onChange}
                    required 
                    
                ></input>
                <input 
                    name="password"
                    type="password" 
                    placeholder="Password" 
                    value={pwd} 
                    onChange={onChange}
                    required 
                ></input>
                <input 
                    type="submit" 
                    value="로그인" 
                ></input>
            </form>
        </div>
    )
}


export default LogIn