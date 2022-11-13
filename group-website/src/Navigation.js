import React from 'react';
import { Link } from 'react-router-dom';
import Frank from './frank.png';
import Luke from './luke.png';
import Peter from './beter.png';
import './Navigation.css';

function Navigation() {
    return (
    <div className='navigation'>
        <ul>
            <li>
                <Link to="/FrankPage" title="Frankpage">
                    <img src={Frank} className='navigation-icon' alt="Homepage"/>
                </Link>
            </li>
            <li>
                <Link to="/HomePage" title="Lukepage">
                    <img src={Luke} className='navigation-icon' alt="Homepage"/>
                </Link>
            </li>
            <li>
                <Link to="/PeterPage" title="Peterpage">
                    <img src={Peter} className='navigation-icon' alt="Homepage"/>
                </Link>
            </li>
        </ul>
    </div>
    )
}

export default Navigation;