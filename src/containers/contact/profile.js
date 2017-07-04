import React from 'react';
import {connect} from "react-redux";

import { User} from '../../components/user';
import { Main } from '../../components/main';

import { BarChart } from '../../components/BarChart';
import { BarChartC } from '../Chart/barchart';

import { setName, setAge, setData } from "../../actions/userActions";



class Contact extends React.Component {

		render(){
			return (
					<div>
					{this.props.children}
					 <Main changeUsername={ () => {
						 this.props.setName("Abhishek Pathak");
						 this.props.setAge("abhishek.pathak@ge.com");
						 }} />
					 <User username={this.props.userDetail.name} userage={this.props.userDetail.age} />
					</div>
			);
		}
	};


	const mapStateToProps = (state) => {
		return {
			userDetail: state.userStore,
			math: state.math,
		};
	};

	const mapDispatchToProps = (dispatch) => {
		return {
			setName: (name) => {
				dispatch(setName(name));
			},
			setAge: (age) => {
				dispatch(setAge(age));
			}
		};
	};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
