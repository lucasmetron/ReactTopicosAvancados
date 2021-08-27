import React from 'react';
import { Route, Link } from 'react-router-dom';
import Address from './about/Adress';
import Contact from './about/Contact';

export default function About(props) {

    const match = props.match;

    return (
        <div>
            <h1>About</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={`address`} >Address</Link>
                    </li>
                    <li>
                        <Link to={`contact`} >Contact</Link>
                    </li>
                </ul>
            </nav>
            <Route path={`/about/address`} exact component={Address} />
            <Route path={`/about/contact`} component={Contact} />
        </div>
    );
}

