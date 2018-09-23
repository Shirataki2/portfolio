import React, {Component} from "react";
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Head extends Component {
    render() {
        return (

            <div className="header_bar">
                <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white black_underline">
                    <Link to='/' className='navbar-brand'>
                        <div className="title_name">Portfolio</div>
                    </Link>
                    <button className='navbar-toggler'
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarCollapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"><span className="navbar-toggler-icon"/>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarCollapse'>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to='/about' className="header_item">
                                    <FontAwesome name='graduation-cap'/>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link to='/works' className="header_item">
                                    <FontAwesome name='terminal'/>
                                    Works
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <a target="_blank" href="https://fgjiutx.hatenablog.com" className="header_item">
                                    <FontAwesome name='book'/>
                                    Blog
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a href="#" className="header_item">
                                    <FontAwesome name='comment'/>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        )
    }
}

export default Head;