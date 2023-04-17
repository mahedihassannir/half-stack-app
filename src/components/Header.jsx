import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex w-11/12 mx-auto mt-5 rounded-md h-20 items-center justify-between px-20 text-white bg-gray-800 '>
                <h1>digital world</h1>
                <ul className='flex gap-5'>
                    <Link to="/">Home</Link>
                    <Link to="/Login">Login</Link>
                    <Link to="/Register">Register</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;