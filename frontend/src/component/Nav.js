import React, { useEffect } from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom'
function Nav(props) {
        const auth=localStorage.getItem('user')
        const navigate=useNavigate()
        const logout=()=>{
            localStorage.clear();
            navigate('/signup')
        }
    return (
        <div>
            {auth?
        <ul className='nav-ul'>
            
            <li><Link to="/">product</Link></li>
            <li><Link to="/add">Addproduct</Link></li>
            <li><Link to="/update">Update product</Link></li>
        
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to='/signup' onClick={logout}>
            Logout({JSON.parse(auth).name})</Link></li>
            </ul>
           :
           <ul className='nav-ul nav-name'>
<li><Link to="/signup">signup</Link></li>
           < li><Link to="/login">Login</Link></li>
        
           </ul>
}
    
        
        </div>
    );
}

export default Nav;