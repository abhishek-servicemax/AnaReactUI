/*
import React from 'react';
import {connect} from "react-redux";
import { BrowserRouter, Link,  Match} from 'react-router';

class Header extends React.Component {

	render(){
		return (
				<div>
				<Link to="/about">Home</Link>
				<Link to="/barchart">Home</Link>
				</div>
				);
	}
}
export default Header;*/

import React, {Component} from 'react';
import './header.css';
import { Button, ButtonToolbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';



class NavH extends Component {
  constructor(props){
    super(props)
    this.state = {activeKey: 1}
  }
  handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
    this.setState({activeKey:selectedKey})
  }

    render(){
        return(

            <div>
            <div className="logo"><img src="../assets/images/ana.jpg" /></div>

            <ul className="menu" >
              <li><Link to="/barchart" onlyActiveOnIndex activeClassName="active">Dashboard</Link></li>
              <li><Link to="/contact" onlyActiveOnIndex activeClassName="active" >Contact</Link></li>
      			  <li><Link to="/visualization" onlyActiveOnIndex activeClassName="active">Visualization</Link></li>
            
            </ul>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default NavH
