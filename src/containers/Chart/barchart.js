import React from 'react';
import {connect} from "react-redux";
import { Main } from '../../components/main';

import { BarChart } from '../../components/BarChart';

import { setData } from "../../actions/userActions";

import axios from 'axios';


//import jsonChartData from '../../assets/Json/modifiedData';



class PlotBarChart extends React.Component {
	constructor(props) {
   super(props);
   this.changeUsername = this.changeUsername.bind(this);


 	}


		getChartData(){
			var arr = [];
			for (var i = 0, l = 10; i < l; i++) {
				arr.push(Math.round(Math.random() * 223))
			}
			return arr;
		}

	changeUsername(){
	//this.props.setData([100, 300, 132, 400, 533, 120, 178, 140, 300, 132, 230, 133, 220, 178]);
	this.props.callFunToSetData(this.getChartData());
	}


	setfunr(){

	}

	render(){
		return (

				<div style ={{margin: '20px'}} >
					<Main changeUsername={this.changeUsername} />
					<BarChart data={this.props.barData.data} yScale={''} xScale={''}/>
					</div>
		);
	}
};


const mapStateToProps = (state) => {
	return {
		barData: state.barReducer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {

		callFunToSetData: (data) => {
			dispatch(setData(data));
		}

		/*
		setData: (data) => {
			dispatch(setData(data));
		}*/
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlotBarChart);
