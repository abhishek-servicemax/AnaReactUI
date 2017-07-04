import React from 'react';
import {connect} from "react-redux";
import { push } from 'react-router-redux';
import { LoginC } from '../../components/ComLogin';

import { setLogin } from "../../actions/loginAction";
import './login.css';

class UserLogin extends React.Component {

  constructor(props){
    super(props);

    this.state ={
      username:'Abhishek',
      password:'Pathak'
    };

    this.onChange = this.onChange.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
   }

   onChange(e){
     console.log(e.target.value);
     this.setState({[e.target.name]: e.target.value});
   }
   handleFormSubmit(nextState, replace) {
     console.log("asdasdasdasd")
     console.log(this.state.username);
  	 console.log(this.state.password);

  	 if(this.state.username == "abhishek" && this.state.password == "pathak"){

  		 UserLogin.contextTypes = {
       router: React.PropTypes.object.isRequired
        };

  		 this.props.history.push('/barchart');
  	  } else {
  		 alert("Error");
  	  }
  }

		render(){
			return (
					<div>
					{this.props.children}
					 <LoginC
           onChange={this.onChange}
           handleFormSubmit={this.handleFormSubmit}
           username={this.state.username} password={this.state.password}
           />
					</div>
			);
		}
	};


const mapStateToProps = (state) => {
  return {
    loginDetail: state.loginReducer,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name, pass) => {
    console.log(name);
    console.log(pass);
      if(name == "Abhishek" && pass == "pathak"){
   		     this.props.history.push('/barchart');
   	  } else {
   		   alert("Error");
   	  }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
