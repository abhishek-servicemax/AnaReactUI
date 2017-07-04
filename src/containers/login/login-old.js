/*import React from 'react';
import {connect} from "react-redux";
import { push } from 'react-router-redux';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './login.css';

import {orangeA100, orangeA200, orangeA400, orangeA700} from 'material-ui/styles/colors';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiTheme = getMuiTheme( {
	  palette: {
	      primary1Color: orangeA400,
	      primary2Color: orangeA400,
	      primary3Color: orangeA400
	  }
	});
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Login extends React.Component {

constructor(props){
  super(props);

  this.state={
  username:'',
  password:''
  }
 }

handleClick = (nextState, replace) => {

	 console.log(this.state.username);
	 console.log(this.state.password);

	 if(this.state.username == "abhishek" && this.state.password == "pathak"){

		 Login.contextTypes = {
     router: React.PropTypes.object.isRequired
 };

		 this.props.history.push('/barchart');
	 } else {
		 alert("Error");
	 }
}

render() {
    return (
      <div className="loginContainer">
      <MuiThemeProvider  muiTheme={muiTheme}>
      <div>
      <AppBar
         title="Login"
       />
			 <div className="loginTextContainer">
       <TextField
         hintText="Enter your Username"
         floatingLabelText="Username" style ={{width: '100%'}}
         onChange = {(event,newValue) => this.setState({username:newValue})}
         />
       <br/>
         <TextField
           type="password"
           hintText="Enter your Password"
           floatingLabelText="Password" style ={{width: '100%'}}
           onChange = {(event,newValue) => this.setState({password:newValue})}
           />
         <br/>
         <RaisedButton label="Submit" primary={true} style ={{display: 'block', margin: '30px'}}  onClick={(event) => this.handleClick(event)}/>
				 </div>
     </div>
     </MuiThemeProvider>
      </div>
    );
  }
}


const style = {
 margin: 15,
};

export default Login ;*/
