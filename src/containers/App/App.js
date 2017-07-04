import React from 'react';
import {connect} from "react-redux";
import { User} from '../../components/user';
import { Main } from '../../components/main';
import Nav from "../header/header";
import { BarChart } from '../../components/BarChart';
import { BarChartC } from '../Chart/barchart';

import { setName, setAge, setData } from "../../actions/userActions";
import './app.css';

class App extends React.Component {

	render(){
		return (
			<div>
        <Nav />
				<div className="mainContent">
        {this.props.children}
				</div>
      </div>

		);
	}
};
export default App;
