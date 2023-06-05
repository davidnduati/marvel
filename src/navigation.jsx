import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import Characters from './charactrs';

function Navigation() {
    return (
        <header>
            <div className="navigation">
                <ul className='havi'>
                    <li>
                        <Link to='/characters'>CHARACTERS</Link>
                    </li>
                    <li>
                        <Link to='/comics'>Comics</Link>
                    </li>
                    <li>
                        <Link to='/movies'>movies</Link>
                    </li>
                            
                </ul>
            </div>

          
          
        </header>
        
    );
}

export default Navigation;
