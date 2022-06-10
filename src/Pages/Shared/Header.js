import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Header = () => {
    const redirectToResume = () => {
        window.location.replace('https://docs.google.com/document/d/1d2Ts-4n__wPxFhVi26F4jiDYAAzRJQxQeEfNwzOTErM/')
    }
    return (
        <div className="navbar bg-gray-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='home'>Homepage</Link></li>
                        <li><Link to='about'>About</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></a>
            </div>
            <div className="navbar-end">
                <button onClick={redirectToResume} className="btn btn-ghost btn-circle">
                    <p>Resume</p>
                </button>
            </div>
        </div>
    );
};

export default Header;